angular.module('historical.ctrl', [])
.controller('historicalCtrl', function($scope,globalValues) {
	$scope.items=globalValues.ghosts;
});