angular.module("controllers")
    .controller("stackedChartCtrl", ["$scope", function ($scope) {
        $scope.stackedOptions = {
            "chart": {
                "type": "multiBarChart",
                "height": 300,
                "margin": {
                    "top": 20,
                    "right": 20,
                    "bottom": 45,
                    "left": 45
                },
                "clipEdge": true,
                "duration": 500,
                "stacked": true,
                "xAxis": {
                    "showMaxMin": false
                },
                "yAxis": {
                    "axisLabel": "Count",
                    "axisLabelDistance": -20,
                    ticks: 3
                }
            }
        };
        $scope.stackedData = [
            {
                key: "AT & T IOT",
                color: "#01B8AA",
                values: [
                    {
                        x: "Connected cars",
                        y: 251
                    },
                    {
                        x: "Industries",
                        y: 923
                    }
    ]
  },
            {
                key: "Acura",
                color: "#374649",
                values: [
                    {
                        x: "Connected cars",
                        y: 0
                    },
                    {
                        x: "Industries",
                        y: 685
                    }
    ]
  },
            {
                key: "ABS enterprise",
                color: "#FD625E",
                values: [
                    {
                        x: "Connected cars",
                        y: 0
                    },
                    {
                        x: "Industries",
                        y: 300
                    }
    ]
  },
            {
                key: "ABS VAR BAC",
                color: "#F2C80F",
                values: [
                    {
                        x: "Connected cars",
                        y: 0
                    },
                    {
                        x: "Industries",
                        y: 200
                    }
    ]
  },
            {
                key: "BMW",
                color: "#5F6B6D",
                values: [
                    {
                        x: "Connected cars",
                        y: 0
                    },
                    {
                        x: "Industries",
                        y: 695
                    }
    ]
  }
      ]

       }])
