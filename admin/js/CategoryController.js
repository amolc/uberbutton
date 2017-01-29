SampleApplicationModule.controller('CategoryController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
    

    $scope.goto = function(page) {
        $location.path(page);
    };

   

    $scope.showhide = function(id) {
        if (document.getElementById(id).style.display == 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    };

});
