var app = angular.module('controllers', [])
app.controller('howtoCtrl', function($scope) {
});

app.controller('introCtrl', function($scope) {
	$scope.ghostName = "CeciliaMofo";
})
app.controller('bio', function($scope) {
	$scope.ghostName = "CeciliaMofo";
})
app.controller('questCtrl', function($scope) {
	$scope.ghostIntroduction = "This is my Ghost introduction..";
})

app.controller('questDescCtrl', function($scope) {
	$scope.questTitle = "Where the pink rose lays, there will be blood..";
  $scope.questTip = "I need to find the Salvation Army.";
})

app.controller('userCtrl', function($scope,globalValues) {
	$scope.experience=globalValues.experience;
});

app.controller('karlCtrl', function($scope) {
	
});

app.controller('introCtrl', function($scope) {
  $scope.ghostName = "CeciliaMofo";
})



app.controller('historicalCtrl', function($scope,globalValues) {
	$scope.items=globalValues.ghosts;
});

app.controller('ceciliaCtrl', function($scope) {
	
});

app.controller('accomplishedCtrl', function($scope,globalValues) {
	$scope.items=globalValues.ghosts;
});

app.controller('hintCtrl', function($scope,$ionicPopup, $timeout) {
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Hint #1',
     template: 'It might taste good'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
  $scope.hintNo = "2";
})

app.controller("fetchData", function($scope, $http) {
$scope.ghosts= [];
$http.get('json/data.json').success(function(data) { 
    console.log("success!");
    $scope.ghosts = data.employees[0].firstName;
    console.log(data.employees[0].firstName);
    });    
});
