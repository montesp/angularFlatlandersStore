(
    function(){

        let app = angular.module("product",[]);
        app.controller("Product",["$scope","$state","$stateParams","$http",
        
        function($scope,$state,$stateParams,$http){

            let product = this;
            //de alguna forma que no comprendo obtenemos un id de quien sabe donde jsjsj
            product._id = $stateParams._id 
            product.detail = {}
            product.reviews = []
            product.sumStars = 0
            product.avgStars = 0

            product.current = 1

            product.setCurrent = function(i){
                product.current = i || 0
                console.log(product.current)
            }
    
            product.isSet = function(i){
                return i === product.current
            }
            
            $http.get("./dummy/products.json").then(function(data){

                //obtenemos el arreglo de productos y lo guardamos en el controlador
                product.products = data.data.gems;
                //buscamos en el arreglo dde productos uno donde el id coincida, ese objeto de producto o ponemos en una vriable llamada details
                product.detail = product.products.find(p => p._id === product._id)
                product.reviews = product.detail.reviews
                //hacemos la suma de todas las estrellas que le han dado al rpoducto
                product.sumStars = product.reviews.map(item => item.stars).reduce((prev, next) => prev + next)
                //sacamos el promedio
                product.avgStars = product.sumStars / product.products.length

            })

        }]);




    
})();