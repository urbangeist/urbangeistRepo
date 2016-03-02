angular.module('user.ctrl', [])
.controller('userCtrl', function($scope,globalValues) {
	$scope.experience=globalValues.experience;
});