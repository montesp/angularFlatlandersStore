(
    function(){

        let app = angular.module("products",[]);
        app.controller("Products",["$scope","$state","$http",function($scope,$state,$http){

            let store = this;

            store.products = []
            store.reviews = []
            store.sumStars = 0
            store.avgStars = 0
            store.search = []
    

            $http.get("./dummy/products.json").then(function(data){
                store.products = data.data.gems;

            })
            

                

            

            store.go = function(_id){
                //cambiamos del state al de productos, le pasamos los parametros como un objeto, como solo esuno, es id, go sirve para cambiar de estdo
                $state.go("app.product",{_id:_id})


            }


        }]);


    
})();