const env = process.env.NODE_ENV;
const cfg = require('../config/config.' + env);
const pool = cfg.pool;
//const utils = require('../common/utils');

class BaseDB {

  constructor() {
    this.con = null;
  }

  escape(val) {
    return pool.escape(val);
  }

  beginTransaction(callback) {
    let $this = this;
    if($this.con) return callback('connection-already-exists');

    pool.getConnection(function(err, con) {
      if(err) return callback(err);

      $this.con = con;
      //console.log('BaseDB.beginTransaction - connection established');
      $this.con.beginTransaction(function(err) {
        if(err) return $this.handleError(err, function(err) { return callback(err); });
        callback();
      });
    });
  }

  query(sql, params, callback) {
    let $this = this;
    let db = $this.con || pool;
    db.query(sql, params, function(err, result) {
      // console.log(sql);
      if(err) return $this.handleError(err, function(error) { return callback(error); });
      return callback(err, result);
    });
  }

  handleError(err, callback) {
    let $this = this;
    if(err) {
      console.log('BaseDB.handleError: ', err);
      if($this.con) {
        $this.rollback(function() {
          if(callback) callback(err);
        });
      } else {
        if(callback) callback(err);
      }
    }
  }

  rollback(callback) {
    let $this = this;
    if($this.con) {
      $this.con.rollback(function(err) {
        console.log('BaseDB.rollback');
        $this.close();
        callback(err);
      });
    } else {
      callback();
    }
  }

  commit(callback) {
    let $this = this;
    if($this.con) {
      $this.con.commit(function(err) {
        //console.log('BaseDB.commit');
        $this.close();
        callback(err);
      });
    }
  }

  close() {
    if(this.con) {
      if(pool._freeConnections.indexOf(this.con) === -1) {
        this.con.release();
        //console.log('BaseDB.close - connection released back to pool');
      }
    }
  }

  create(sql, params, callback) {
    this.query(sql, params, callback);
  }

  update(sql, params, callback) {
    this.query(sql, params, callback);
  }

  delete(sql, params, callback) {
    console.log('BaseDB.delete: ', sql);
    this.query(sql, params, callback);
  }

  list(sql, params, callback) {
    if(!params) {
      params = {};
    }

    var start,size;
    start = params.start || 0;
    size = params.size || 20;

    this.query(sql, params, callback);
  }

}

module.exports = BaseDB;
