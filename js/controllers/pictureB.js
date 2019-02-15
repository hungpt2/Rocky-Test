angular
    .module('app')
    .controller('pintureBCtl', pintureBCtl)

pintureBCtl.$inject = ['$scope', 'pictureBService'];

function pintureBCtl($scope, pictureBService) {

    $scope.title = 'B.Preparation for work';
    $scope.listEl = [];

    $scope.initial = function () {
        $scope.listEl = pictureBService.getListEl();
        console.log('hello', $scope.listEl);
    }

}