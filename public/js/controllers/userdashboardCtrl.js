SampleApplicationModule.controller('dashboardcontroller', [
  '$scope',
  '$http',
  '$stateParams',
  '$location',
  '$state',
  'store',
  '$rootScope',
  function($scope, $http, $stateParams, $location, $state, store, $rootScope) {
    $rootScope.userSession = store.get('userSession');
    var userid = $rootScope.userSession.userid;
    $scope.init = function(){
        $scope.userid = userid;
        $scope.productListing();
        $scope.purchaselist();
        $scope.byerorderlist();
    }


    $scope.productListing = function(){
        $http.get(baseUrl + "productlist/" + userid).success(function(res){
            if(res){
                $scope.userproduct = res
            }
        }).error(function(err){
            console.log('something went wrong...');
        });
    }

    $scope.purchaselist = function(){
        $http.get(baseUrl + "purchase/" + userid).success(function(res){
            if(res){
                $scope.purchase = res
            }
        }).error(function(err){
            console.log('something went wrong...');
        });
    }

    $scope.byerorderlist = function(){
        $http.get(baseUrl + "byer/" + userid).success(function(res){
            if(res){
                $scope.byerproduct = res
            }
        }).error(function(err){
            console.log('something went wrong...');
        });
    }

    }
]);
