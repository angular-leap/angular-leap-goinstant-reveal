angular.module("rboehmAngularSlides")
    .run(function ($rootScope) {
        // Reveal bindings
        $rootScope.left     = Reveal.left;
        $rootScope.up       = Reveal.up;
        $rootScope.down     = Reveal.down;
        $rootScope.right    = Reveal.right;
    });


