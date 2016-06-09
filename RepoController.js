(function () {

    var RepoController = function ($scope, github, $routeParams) {
        
        var onRepo = function (data) {
            $scope.repo = data;
        };
        var onError = function (reason) {
            $scope.error = 'Cannot retrieve data';
        };

        
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

       
        github.getRepoDetails(username, reponame).then(onRepo, onError);
    }

    var app = angular.module('firstApp');
    app.controller('RepoController', RepoController);

})();
