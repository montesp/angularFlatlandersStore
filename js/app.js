(
    function(){

        let app = angular.module(
        'fStore',['ui.router','ui.router.state.events','landing','navbar',"footer","app",
        "products","product","filters","gallery","panels","reviewtab","specstab","descriptab","favProducts"]);

        app.config(["$stateProvider","$urlRouterProvider","$locationProvider",
        function($stateProvider,$urlRouterProvider,$locationProvider){

            $stateProvider
            .state( 'landing',{
                url:'/landing',
                templateUrl:'partials/landing.html',
                controller:'Landing'

            })
            .state( 'app',{
                url:'/app',
                //con esto le decimos al state que puede tener hijos
                abstract:true,
                templateUrl:'partials/main-panel.html',
                controller:'App'

            })      //asi es como le definimos hijos a un state, de forma que cuando se invoca hereda a su padre
            .state( 'app.products',{
                url:'/products',
                //aqui definimos las views del padre, por ejemplo, content mostreria los productos
                views:{
                    'content':{
                        templateUrl:'partials/products/products.html',
                        controller:'Products'

                    }

                }


            }) .state( 'app.product',{
                url:'/products/:_id',
                //aqui definimos las views del padre, por ejemplo, content mostreria los productos
                views:{
                    'content':{
                        templateUrl:'partials/products/product.html',
                        controller:'Product' 
                    }
                }
            })

            $urlRouterProvider.otherwise('/landing');
            $locationProvider.html5Mode(false)
        }]);







    
})();