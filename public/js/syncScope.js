angular.module("rboehmAngularSlides")
// Sync the whole new Scope
.controller('syncScope', function ($scope, GoAngular) {
    new GoAngular($scope, 'scope' + $scope.$id).initialize();
});
