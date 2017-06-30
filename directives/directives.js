/*(function(){
    angular.module("directives",[]);
})();*/

angular.module("directives", [])
    .directive("modalPopup", [function () {
        return {
            templateUrl: "templates/modal.html",
            restrict: "A",
            replace: true,
            transclude: true,
            link: function (scope) {
                scope.cancel = function () {
                    scope.$dismiss('cancel');
                };
            }
        }
       }])
