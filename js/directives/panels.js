(function() {

    let app = angular.module('panels', [])

    app.directive("productPanels", function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/product-panels.html'
        }
    })
})();