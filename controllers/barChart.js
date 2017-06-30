angular.module("controllers")
    .controller("barChartCtrl", ["$scope", function ($scope) {
        $scope.view = "#product_view";
        $scope.open = false;
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value + (1e-10);
                },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis',
                    rotateLabels: "-25"
                },
                yAxis: {
                    axisLabel: 'MTTR in Days',
                    axisLabelDistance: -10,
                    ticks: 4
                }
            }
        };

        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "Connected Cars",
                        "value": 14,
                        color: "#01B8AA"
                    },
                    {
                        "label": "Industries",
                        "value": 40,
                        color: "#01B8AA"
                    }
                ]
            }
        ]
    }]);
