(function () {

    var MainController = function ($scope, $interval, $location) {

        
        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };
        var CountDown = null;
        var startCountdown = function () {
            CountDown = $interval(decrementCountdown, 1000, $scope.countdown)
        };



        $scope.search = function (username) {
            if (CountDown) {
                $interval.cancel(CountDown);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        

        
        $scope.username = "satenik-m";

        $scope.countdown = 10;
        startCountdown();


    }

    var app = angular.module('firstApp');
    app.controller('MainController', MainController);

})();
