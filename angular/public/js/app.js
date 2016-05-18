var app = angular.module('bootstrap', ['ngRoute']);
app.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index.html',
                controller: 'SearchCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
