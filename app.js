const app = angular.module('app', []);


app.directive('time', function () {
    return {
        template: '<div class="bg-yellow">{{ message }}</div>',
        controller: function ($scope) {
            $scope.message = currentTime();
            setInterval(() => {
                $scope.message = currentTime();
                $scope.$apply();
            }, 1000)
        },
        restrict: 'E'
    }
});

function currentTime() {
    return moment().format();
}
