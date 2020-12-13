(
    function(){

        let app = angular.module("favProducts",[ ])


                    //este es el que cambiamos para modificar la etiqueta
        app.directive("favProducts",["$http",function($http){

            let gems = []

            $http.get("./dummy/products.json").then(function(data){

                 gems = data.data.gems;

            })

            function getPartitedArray(){{

                sortedGems = gems.sort((a, b) => b.sold - a.sold);

                let partitedGems = []

                let i = 0
                while(i < gems.length){

                    let tanda =[]

                    for(let u = 0;u < 4 &&  i < gems.length;u++){

                        tanda.push(gems[i])
                        i++;

                    }
                        
                    partitedGems.push(tanda)

                }

                return partitedGems;

            }}

            return{

                restrict:"E",
                templateUrl:"partials/favProducts.html",
                controller:function(){

                    store = this
                    store.otherBanners = []
                    store.firstBanner = []
                    store.partitedArray = []

                    store.partitedArray =  getPartitedArray();

                    console.log(store.partitedArray)

                },
                controllerAs:"fav"

            }
        }])
            
})();