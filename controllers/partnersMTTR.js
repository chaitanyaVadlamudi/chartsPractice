angular.module("controllers")
    .controller("partnersMTTRCtrl", ["$scope", function ($scope) {
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showControls: false,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'MTTR in Days',
                    tickFormat: function (d) {
                        return d3.format('')(d);
                    },
                    ticks: 4
                },
                stacked: true,
                showValues: true
            }
        };

        $scope.data = [
            {
                key: "Average of Duration",
                color: "#01B8AA",
                values: [
                    {
                        "label": "AT&T",
                        "value": 14
                    },
                    {
                        "label": "Jasper",
                        "value": 40
                    }
                ]
            }
        ]
       }])
