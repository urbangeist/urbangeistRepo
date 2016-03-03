angular.module('historical.ctrl', [])
.controller('historicalCtrl', function($scope,globalValues) {
	//$scope.items=globalValues.entities;
	globalValues.get().then(function(response){
        $scope.items = response.data.ghosts;
    });
});