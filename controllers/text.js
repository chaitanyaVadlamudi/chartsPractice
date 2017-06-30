angular.module("controllers")
    .controller("textCtrl", ["$scope", "$http", "$modal", "$modalProvider", function ($scope, $http, $modal, $modalProvider) {
        $scope.tickets = [];
        $http.get("http://localhost:2424/tickets")
            .then(function (response) {
                console.log(response);
                console.log(response.data[0].name)
                $scope.tickets.push(response.data);
                console.log($scope.tickets);
            })
            .catch(function (err) {
                console.log(err);
            });
        $scope.showModal = function () {
            $modal.open({
                templateUrl: 'templates/modal.html',
                controller: "modalCtrl"
            });
        }
       }])
