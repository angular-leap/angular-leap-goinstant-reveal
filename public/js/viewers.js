angular.module("rboehmAngularSlides")
    .run(function ($rootScope, $location, GoAngular, platform) {
        var rooms;

        function updateViewers() {
            if (angular.isDefined(rooms)) {
                rooms['lobby'].users(function (error, userMap) {
                    // External Event, so we need to trigger digest
                    $rootScope.$apply(
                        function () {
                            $rootScope.userCount = Object.keys(userMap).length;
                        }
                    );
                });
            }
        }

        platform.then(function (platform) {
            rooms = platform.rooms;
            updateViewers();
        });

        $rootScope.$watch('slidePosition', updateViewers);
    });


