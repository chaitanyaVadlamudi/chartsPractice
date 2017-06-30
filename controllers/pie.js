angular.module("controllers")
    .controller("pieCtrl", ["$scope", function ($scope) {
        $scope.pieOptions = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.pieData = [
            {
                key: "ABS Enterprise",
                y: 70,
                color: "#FD625E"
            },
            {
                key: "ABS VAR BAC",
                y: 50,
                color: "#FD625E"
            },
            {
                key: "ABS VAR other",
                y: 30,
                color: "#FD625E"
            },
            {
                key: "Acura",
                y: 25,
                color: "#F2C80F"
            },
            {
                key: "AT & T IOT",
                y: 30,
                color: "#F2C80F"
            },
            {
                key: "BMW",
                y: 25,
                color: "#01B8AA"
            }

        ];

       }])



    //modalCtrl

    .controller("modalCtrl", ["$scope", "$interval", function ($scope, $interval) {
        //        $scope.autoRefresh = function () {
        $scope.id = "product_view"
        $scope.modalPieOptions = {
            chart: {
                type: 'pieChart',
                height: 300,
                width: 600,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 15,
                        right: 5,
                        left: 10,
                        bottom: 25
                    }
                }
            }
        };


        $scope.modalPieData = [
            {
                key: "ABS Enterprise",
                y: 70,
                color: "#FD625E"
            },
            {
                key: "ABS VAR BAC",
                y: 50,
                color: "#FD625E"
            },
            {
                key: "ABS VAR other",
                y: 30,
                color: "#FD625E"
            },
            {
                key: "Acura",
                y: 25,
                color: "#F2C80F"
            },
            {
                key: "AT & T IOT",
                y: 30,
                color: "#F2C80F"
            },
            {
                key: "BMW",
                y: 25,
                color: "#01B8AA"
            }

        ];
        //        };//        $scope.autoRefresh();
        //        $interval($scope.autoRefresh, 1);



       }])
