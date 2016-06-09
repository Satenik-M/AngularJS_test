//creating custom service for HTTP requests to github API

(function () {


    var github = function ($http) {
        //getUser will return a PROMISE
        var getUser = function (username) {
            return $http.get('https://api.github.com/users/' + username)
                        .then(function (response) {
                            return response.data;
                        });
        };
        //promise on all the repos
        var getRepos = function (user) {
            return $http.get(user.repos_url)
                        .then(function (response) {
                            return response.data;
                        });
        }
        //returns a promise on a specific repo and its contributors
        var getRepoDetails = function (username, reponame) {
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            return $http.get(repoUrl)
                .then(function (response) {
                    repo = response.data;
                    return $http.get(repoUrl + '/contributors');
                })
                .then(function (response) {
                    repo.contributors = response.data;
                    return repo;
                });
                
                
           


        };
        
        //the public API (revealing module design pattern)
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            //getContributors:getContributors

        };
    };
    var module = angular.module('firstApp');
    module.factory("github", github);

}());