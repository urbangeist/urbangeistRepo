angular.module('accomplished.ctrl', [])
.controller('accomplishedCtrl', function($scope,globalValues) {
	$scope.items=globalValues.ghosts;
});