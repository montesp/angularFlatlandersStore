(
    function(){

        let app = angular.module("footer",[ ])


                    //este es el que cambiamos para modificar la etiqueta
        app.directive("footerb",function(){

            return{

                restrict:"E",
                templateUrl:"partials/footer.html",
                controller:function(){
                    console.log("footer directive")

                },
                controllerAs:"foot"

            }
        })
            
})();