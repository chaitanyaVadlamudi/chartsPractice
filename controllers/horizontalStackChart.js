angular.module("controllers")
    .controller("horizontalStackCtrl", ["$scope", function ($scope) {
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
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Ticket Count',
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
                "key": "Outage",
                "color": "#374649",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 4
                    },
                    {
                        "label": "Jasper",
                        "value": 3
                    }
                ]
            },
            {
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 628
                    },
                    {
                        "label": "Jasper",
                        "value": 10
                    }
                ]
            },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 390
                    },
                    {
                        "label": "Jasper",
                        "value": 34
                    }
                ]
            },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 2105
                    },
                    {
                        "label": "Jasper",
                        "value": 832
                    }
                ]
            }
        ]
       }]);
