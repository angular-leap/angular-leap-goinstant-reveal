angular.module("rboehmAngularSlides", ['angular-leap', 'goinstant'])

    // Init goInstant
    .config(function (platformProvider) {
        platformProvider.set('https://goinstant.net/robinboehm/1');
    })

    // Sync the whole new Scope
    .controller('newScope', function ($scope, GoAngular) {
        new GoAngular($scope, 'scope' + $scope.$id).initialize();
    })

    //
    .run(function ($rootScope, $location, GoAngular) {
        // Reveal bindings
        $rootScope.left     = Reveal.left;
        $rootScope.up       = Reveal.up;
        $rootScope.down     = Reveal.down;
        $rootScope.right    = Reveal.right;


        // Angular GoInstant Sync
        new GoAngular($rootScope, 'slides').initialize();
        $rootScope.$on('$locationChangeStart', function (event) {
            $rootScope.slidePosition = location.hash.split("/");
        });

        $rootScope.$watch('slidePosition', function (newValue) {
            if (angular.isDefined(newValue)) {
                var currentSlide = {
                    v: newValue[1],
                    h: newValue[2]
                };
                Reveal.slide(currentSlide.v, currentSlide.h);
            }
        })

    });


