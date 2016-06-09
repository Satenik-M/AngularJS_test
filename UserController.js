(function () {

    var UserController = function ($scope, github, $routeParams) {

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };
        var onRepos = function (data) {
            $scope.user.repos = data;
            
        };
        var onError = function (response) {
            $scope.error = 'Cannot retrieve data';
        };
        $scope.repoSortOrder = '+name';
        $scope.username = $routeParams.username;
        github.getUser($scope.username).then(onUserComplete, onError);
    }

    var app = angular.module('firstApp');
    app.controller('UserController', UserController);

})();
