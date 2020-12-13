(function () {

    let app = angular.module('reviewtab', [])

    app.directive('reviewTab', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/review-tab.html',
            controller: function () {
                console.log("review tab")

                this.rating = 0;
                this.ratings = [{
                    current: 3,
                    max: 5
                }];

                this.getSelectedRating = function (rating) {
                    console.log(rating);
                }
            },
            controllerAs: 'rTab'
        }
    })

})();