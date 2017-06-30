angular.module("controllers")
    .controller("impactSeverityCtrl", ["$scope", function ($scope) {
        $scope.id = "product_view";
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 100
                },
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
                stacked: true
            }
        };
        $scope.data = [
            {
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [
                    {
                        "label": "ABS Enterprise",
                        "value": 225
                    },
                    {
                        "label": "ABS VAR BAC",
                        "value": 201
                    },
                    {
                        "label": "ABS VAR Other",
                        "value": 0
                    },
                    {
                        "label": "AT&T IOT",
                        "value": 0
                    },
                    {
                        "label": "AT&T Mobility",
                        "value": 0
                    }
                ]
            },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [
                    {
                        "label": "ABS Enterprise",
                        "value": 61
                    },
                    {
                        "label": "ABS VAR BAC",
                        "value": 61
                    },
                    {
                        "label": "ABS VAR Other",
                        "value": 0
                    },
                    {
                        "label": "AT&T IOT",
                        "value": 0
                    },
                    {
                        "label": "AT&T Mobility",
                        "value": 0
                    }
                ]
            },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [
                    {
                        "label": "ABS Enterprise",
                        "value": 637
                    },
                    {
                        "label": "ABS VAR BAC",
                        "value": 423
                    },
                    {
                        "label": "ABS VAR Other",
                        "value": 52
                    },
                    {
                        "label": "AT&T IOT",
                        "value": 51
                    },
                    {
                        "label": "AT&T Mobility",
                        "value": 677
                    }
                ]
            }
        ]
       }])
