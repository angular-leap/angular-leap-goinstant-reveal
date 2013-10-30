angular.module("rboehmAngularSlides")
    // Init goInstant
    .config(function (platformProvider) {
        platformProvider.set('https://goinstant.net/robinboehm/1');
    })
    .run(function ($rootScope, $location, GoAngular) {
        // Angular GoInstant Sync
        new GoAngular($rootScope, 'slides').initialize();

        $rootScope.$on('$locationChangeStart', function () {
            $rootScope.slidePosition = location.hash.split("/");
        });

        $rootScope.$watch('slidePosition', function (newValue) {
            if (angular.isDefined(newValue)) {
                Reveal.slide(newValue[1], newValue[2]);
            }
        });
    });


