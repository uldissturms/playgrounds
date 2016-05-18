angular.module('bootstrap')
    .controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.results = [];

        var updateResults = function(results)
        {
            $scope.error = '';
            $scope.results = results;
        };

        $scope.search = function () {
            $http.get('/search?q=' + $scope.query)
                .then(function(res) {
                    updateResults(res.data.results);
                }, function() {
                    $scope.error = 'Oups! Error has occured...';
                });
        };
    }]);
