/*(function(){
    angular.module("d3Demo",["directives"]);
})();*/

angular.module("d3Demo", ["directives", "nvd3", "controllers", "ui.router"]);

angular.module("d3Demo")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        //        $urlRouterProvider.otherwise("/login");  
        var loginObj = {
            templateUrl: "templates/login.html",
            controller: "loginCtrl",
            url: "/login"
        };

        var page1Obj = {
            templateUrl: "templates/charts.html",
            url: "/page1"
        };

        $stateProvider.state("login", loginObj);
        $stateProvider.state("page1", page1Obj);

    }])
