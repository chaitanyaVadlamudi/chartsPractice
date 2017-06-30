angular.module("controllers")
    .controller("loginCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.login = function () {
            $state.go("page1");
        };
       }]);
