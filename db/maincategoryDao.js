const utils = require('../common/utils');
const BaseDB = require('./baseDao.js');
const bidDao = require('../db/bidDao');

var leadDao = {

  save: function(params, callback, dbBase) {
    if(!params) return callback('params-missing');
    if(!dbBase) return callback('db-transaction-required');

    let $this = this;
    if(params.id_pk) {
      let set = {};
      if(params.is_rent) set.is_rent = params.is_rent;
      if(params.is_sale) set.is_sale = params.is_sale;
      if(params.proposed_amount) set.proposed_amount = params.proposed_amount;

      let sql = 'update leads set ? where id_pk = ?';
      dbBase.update(sql, [set, params.id_pk], function(err, result) {
        callback(err, result);
      });
    } else {

      let leadData = {
        instance_fk: utils.instance(),
        user_fk: params.user_fk,
        unit_fk: params.unit_fk,
        is_rent: params.is_rent,
        is_sale: params.is_sale,
        proposed_amount: params.proposed_amount
      };

      let statusName = params.status || 'hold';
      $this.findStatusByName(statusName, function(err, result) {
        if(err) return callback(err);
        if(!result) return callback('lead-status-not-found');

        let statusId = result.id;
        leadData.status_fk = statusId;

        dbBase.query('insert into leads set ?', leadData, function(err, result) {
          if(err) return callback(err, result);

          let options = {
            lead_fk: result.insertId,
            status_fk: statusId,
            posted: new Date()
          };

          dbBase.query('insert into lead_status_history set ?', options, function(err, result) {
            return callback(err, result);
          });
        });
      }, dbBase);
    }
  },

  addStatus: function(params, callback, dbBase) {
    if(!params) return callback('params-missing');

    let statusName = params.status;
    let $this = this;
    this.findStatusByName(statusName, function(err, result) {
      if(err) return callback(err);
      if(!result) return callback('lead-status-not-found');

      let hisData = {
        lead_fk: params.lead_fk,
        status_fk: result.id,
        posted: new Date()
      };
      var sql = 'insert into lead_status_history set ?';
      if(!dbBase) dbBase = new BaseDB();

      dbBase.create(sql, hisData, function(err, result) {
        if(err) return callback(err);

        dbBase.update('update leads set status_fk = ? where id_pk = ?', [hisData.status_fk, hisData.lead_fk], function(err, result) {
          if(err) return callback(err);
          return $this.findById(hisData.lead_fk, callback);
        });
      });
    }, dbBase);
  },

  findStatusByName: function(name, callback, dbBase) {
    if(!dbBase) dbBase = new BaseDB();
    dbBase.list('select id_pk as id, name, label from lead_status where name = ?', [name], function(err, result) {
      if(err) return callback(err);
      if(result.length === 0) return callback();
      callback(err, result[0]);
    });
  },

  findById: function(id, callback, dbBase) {
    if(!id) return callback('id-missing');
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select null as requestId, h.id_pk as historyId, l.unit_fk as unitId, p.id_pk as propertyId, l.user_fk as userId, null as ownerId, ' +
              'null as agentId, null as amount, null as expectedDate, null as leaseTerm, null as requireAgent, ' +
              's.name as status, h.posted, null as comments, l.id_pk as leadId, l.is_rent, l.is_sale, l.proposed_amount, ' +
              'u.area_sqft, u.bedrooms, u.bathrooms, p.name, p.postal_code, p.address1, p.city, pt.name as unit_type, uu.is_owner as isOwner, ' +
              'uu.is_agent as isAgent, b.biddingAmount, b.biddingPosted, b1.totalBids ' +
              'from lead_status_history h ' +
              'join (select max(id_pk) as maxid from lead_status_history group by lead_fk) dmax on dmax.maxid = h.id_pk ' +
              'join leads l on h.lead_fk = l.id_pk and h.status_fk = l.status_fk ' +
              'join lead_status s on s.id_pk = l.status_fk ' +
              'left join (select max(amount) as biddingAmount, max(posted) as biddingPosted, lead_fk from bids group by lead_fk) b on b.lead_fk = l.id_pk ' +
              'left join (select count(lead_fk) as totalBids, lead_fk from bids group by lead_fk) b1 on b1.lead_fk = l.id_pk ' +
              'left join units u on u.id_pk = l.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'left join unit_users uu on uu.unit_fk = u.id_pk and uu.user_fk = l.user_fk ' +
              'where l.id_pk = ?';

    dbBase.list(sql, [id], function(err, result) {
      if(err) return callback(err);
      if(result.length === 0) return callback();

      return callback(err, result[0]);
    });
  },

  findAllLeads: function (callback, dbBase) {
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select l.id_pk as id, l.user_fk as userId, l.unit_fk as unitId, l.is_rent as isRent, l.is_sale as isSale, l.proposed_amount as proposedAmount, s.name as status ' +
              'from leads l ' +
              'join lead_status s on s.id_pk = l.status_fk';

    dbBase.list(sql, [], function(err, result) {
      callback(err, result);
    });
  },

  findLeadsAndUserRequestsByStatus: function (userId, userRequestStatus, statusName, callback, dbBase) {
    if(!statusName) callback('status-name-required');
    if(!userId) callback('user-id-required');
    if(!userRequestStatus) callback('user-request-status-name-required');
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select ur.id_pk as requestId, h.id_pk as historyId, ur.unit_fk as unitId, ur.user_fk as userId, ' +
              'ur.owner_user_fk as ownerId, ur.agent_user_fk as agentId, ur.amount, ur.expected_date as expectedDate, ' +
              'ur.lease_term as leaseTerm, ur.require_agent as requireAgent, s.name as status, h.posted, h.comments, ' +
              'null as leadId, null as is_rent, null as is_sale, null as proposed_amount, ' +
              'u.area_sqft, u.bedrooms, u.bathrooms, u.furnishing, p.name, p.postal_code, p.address1, p.city, pt.name as unit_type, ' +
              'p.developer, p.build_year, ' +
              'null as isOwner, null as isAgent, null as biddingAmount, null as biddingPosted, null as totalBids ' +
              'from user_request_status_history h ' +
              'join (select max(id_pk) as maxid from user_request_status_history group by user_request_fk) dmax on dmax.maxid = h.id_pk ' +
              'join user_requests ur on ur.id_pk = h.user_request_fk ' +
              'join user_request_status s on s.id_pk = h.status_fk ' +
              'left join units u on u.id_pk = ur.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'where ur.agent_user_fk = ? and s.name = ? and ur.require_agent = 0 ' +
              'union ' +
              'select null as requestId, h.id_pk as historyId, l.unit_fk as unitId, l.user_fk as userId, null as ownerId, ' +
              'null as agentId, null as amount, null as expectedDate, null as leaseTerm, null as requireAgent, ' +
              's.name as status, h.posted, null as comments, l.id_pk as leadId, l.is_rent, l.is_sale, l.proposed_amount, ' +
              'u.area_sqft, u.bedrooms, u.bathrooms, u.furnishing, p.name, p.postal_code, p.address1, p.city, pt.name as unit_type, ' +
              'p.developer, p.build_year, ' +
              'uu.is_owner as isOwner, uu.is_agent as isAgent, b.biddingAmount, b.biddingPosted, b1.totalBids ' +
              'from lead_status_history h ' +
              'join (select max(id_pk) as maxid from lead_status_history group by lead_fk) dmax on dmax.maxid = h.id_pk ' +
              'join leads l on h.lead_fk = l.id_pk and h.status_fk = l.status_fk ' +
              'join lead_status s on s.id_pk = l.status_fk ' +
              'left join (select max(amount) as biddingAmount, max(posted) as biddingPosted, lead_fk from bids group by lead_fk) b on b.lead_fk = l.id_pk ' +
              'left join (select count(lead_fk) as totalBids, lead_fk from bids group by lead_fk) b1 on b1.lead_fk = l.id_pk ' +
              'left join units u on u.id_pk = l.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'left join unit_users uu on uu.unit_fk = u.id_pk and uu.user_fk = l.user_fk ' +
              'where s.name = ?';

    dbBase.list(sql, [userId, userRequestStatus, statusName], function(err, rows) {
      if(err) return callback(err);

      let data = {};
      data.leads = rows;
      let sql = 'select walletBalance - sum(bidAmount) as floatingBalance ' +
                'from ( ' +
                '       select b.lead_fk, max(case when s.name = ? then b.amount else 0 end) bidAmount, s.name as name, wallet.walletBalance ' +
                '       from (select sum(amount) as walletBalance, user_fk from transactions group by user_fk) wallet ' +
                '	   left join ( ' +
                '           			select b1.id_pk, b1.amount as amount, b1.lead_fk, b1.user_fk, b1.is_winner ' +
                '					from bids b1 ' +
                '					join ( ' +
                '                        	select max(id_pk) as maxId, max(amount) as maxAmount, lead_fk ' +
                '                        	from bids group by lead_fk ' +
                '                    	) b2 on b2.maxId = b1.id_pk ' +
                '       			) b on b.user_fk = wallet.user_fk and b.is_winner = 0 ' +
                '       left join leads l on l.id_pk = b.lead_fk ' +
                '       left join lead_status s on s.id_pk = l.status_fk ' +
                '       where wallet.user_fk = ? ' +
                '       group by b.lead_fk, s.name ' +
                ' ) floating';

      dbBase.list(sql, [statusName, userId], function (err, result) {
        if(err) return callback(err);

        data.floatingBalance = result[0].floatingBalance || 0;
        return callback(err, data);
      });
    });
  },

  findByStatus: function (statusName, callback, dbBase) {
    if(!statusName) callback('status-name-required');
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select l.id_pk as id, l.unit_fk as unitId, l.user_fk as userId, l.is_rent, l.is_sale, l.proposed_amount, ' +
              's.name as status, h.posted, u.area_sqft, p.name, p.postal_code, p.address1, p.city, pt.name as unit_type, ' +
              'uu.is_owner as isOwner, uu.is_agent as isAgent, b.biddingAmount, b.biddingPosted ' +
              'from lead_status_history h ' +
              'join (select max(id_pk) as maxid from lead_status_history group by lead_fk) dmax on dmax.maxid = h.id_pk ' +
              'join leads l on h.lead_fk = l.id_pk and h.status_fk = l.status_fk ' +
              'join lead_status s on s.id_pk = l.status_fk ' +
              'left join (select max(amount) as biddingAmount, max(posted) as biddingPosted, lead_fk from bids group by lead_fk) b on b.lead_fk = l.id_pk ' +
              'left join units u on u.id_pk = l.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'left join unit_users uu on uu.unit_fk = u.id_pk and uu.user_fk = l.user_fk ' +
              'where s.name = ? ';

    dbBase.list(sql, [statusName], function(err, leads) {
      callback(err, leads);
    });
  },

  findDetailsById: function (leadId, statusName, userId, callback, dbBase) {
    if(!leadId) callback('lead-id-required');
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select l.id_pk as id, l.unit_fk as unitId, l.user_fk as userId, l.is_rent, l.is_sale, l.proposed_amount, ' +
              's.name as status, h.posted, u.area_sqft, u.bedrooms, p.name, p.postal_code, p.address1, p.city, pt.name as propetyType, ' +
              'b.amount as biddingAmount, uu.is_owner as isOwner, uu.is_agent as isAgent ' +
              'from lead_status_history h ' +
              'join (select max(id_pk) as maxid from lead_status_history group by lead_fk) dmax on dmax.maxid = h.id_pk ' +
              'join leads l on h.lead_fk = l.id_pk and h.status_fk = l.status_fk ' +
              'join lead_status s on s.id_pk = l.status_fk ' +
              'left join (select max(amount) as amount, lead_fk from bids group by lead_fk) b on b.lead_fk = l.id_pk ' +
              'left join units u on u.id_pk = l.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'left join unit_users uu on uu.unit_fk = u.id_pk and uu.user_fk = l.user_fk ' +
              'where l.id_pk = ?';

    dbBase.list(sql, [leadId], function(err, leads) {
      if(err) return callback(err);
      if(leads.length === 0) return callback();

      let lead = leads[0];

      bidDao.findByLeadId(leadId, function (err, bids) {
        if(err) return callback(err);
        if(bids.length > 0) lead.bids = bids;

        // let sql = 'select walletBalance - sum(bidAmount) as floatingBalance ' +
        //           'from ( ' +
        //           '       select b.lead_fk, max(case when s.name = ? then b.amount else 0 end) bidAmount, s.name as name, wallet.walletBalance ' +
        //           '    	  from (select sum(amount) as walletBalance, user_fk from transactions group by user_fk) wallet ' +
        //           '       left join (select max(amount) as amount, lead_fk, user_fk, is_winner from bids group by lead_fk) b on b.user_fk = wallet.user_fk and b.is_winner = 0 ' +
        //           '		    left join leads l on l.id_pk = b.lead_fk ' +
        //           '		    left join lead_status s on s.id_pk = l.status_fk ' +
        //           '		    where wallet.user_fk = ? ' +
        //           '		    group by b.lead_fk, s.name ' +
        //           ') floating';

        let sql = 'select walletBalance - sum(bidAmount) as floatingBalance ' +
                  'from ( ' +
                  '       select b.lead_fk, max(case when s.name = ? then b.amount else 0 end) bidAmount, s.name as name, wallet.walletBalance ' +
                  '       from (select sum(amount) as walletBalance, user_fk from transactions group by user_fk) wallet ' +
                  '	   left join ( ' +
                  '           			select b1.id_pk, b1.amount as amount, b1.lead_fk, b1.user_fk, b1.is_winner ' +
                  '					from bids b1 ' +
                  '					join ( ' +
                  '                        	select max(id_pk) as maxId, max(amount) as maxAmount, lead_fk ' +
                  '                        	from bids group by lead_fk ' +
                  '                    	) b2 on b2.maxId = b1.id_pk ' +
                  '       			) b on b.user_fk = wallet.user_fk and b.is_winner = 0 ' +
                  '       left join leads l on l.id_pk = b.lead_fk ' +
                  '       left join lead_status s on s.id_pk = l.status_fk ' +
                  '       where wallet.user_fk = ? ' +
                  '       group by b.lead_fk, s.name ' +
                  ' ) floating';

        dbBase.list(sql, [statusName, userId], function(err, result) {
          if(err) return callback(err);

          lead.floatingBalance = result[0].floatingBalance;
          callback(err, lead);
        });
      });
    });
  },

  findAll: function (params, callback, dbBase) {
    if(!dbBase) dbBase = new BaseDB();

    let sql = 'select l.id_pk as id, l.unit_fk as unitId, l.user_fk as userId, l.is_rent, l.is_sale, l.proposed_amount, ' +
              's.name as status, h.posted, b.totalBids, u.area_sqft, p.name, p.postal_code, p.address1, p.city, pt.name as unit_type, ' +
              'uu.is_owner as isOwner, uu.is_agent as isAgent, us.first_name as userFirstName, us.last_name as userLastName, ' +
              'us.email as userEmail, us.mobile as userMobile, b1.amount as winningAmount, us1.first_name as winnerFirstName, ' +
              'us1.last_name as winnerLastName, us1.email as winnerEmail, us1.mobile as winnerMobile ' +
              'from lead_status_history h ' +
              'join (select max(id_pk) as maxid from lead_status_history group by lead_fk) dmax on dmax.maxid = h.id_pk ' +
              'join leads l on h.lead_fk = l.id_pk and h.status_fk = l.status_fk ' +
              'join lead_status s on s.id_pk = l.status_fk ' +
              'left join (select count(id_pk) as totalBids, lead_fk from bids group by lead_fk) b on b.lead_fk = l.id_pk ' +
              'left join units u on u.id_pk = l.unit_fk ' +
              'left join properties p on p.id_pk = u.property_fk ' +
              'left join property_type pt on pt.id_pk = p.type_fk ' +
              'left join unit_users uu on uu.unit_fk = u.id_pk and uu.user_fk = l.user_fk ' +
              'left join users us on us.id_pk = l.user_fk ' +
              'left join bids b1 on b1.lead_fk = l.id_pk and b1.is_winner = 1 ' +
              'left join users us1 on us1.id_pk = b1.user_fk';

    dbBase.list(sql, [], function(err, leads) {
      callback(err, leads);
    });
  }

};

module.exports = leadDao;
