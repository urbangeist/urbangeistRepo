var app = angular.module('controllers', [])
app.controller('howtoCtrl', function($scope) {
});

app.controller('introCtrl', function($scope) {
	$scope.ghostName = "CeciliaMofo";
})
app.controller('bio', function($scope, ListFactory) {
    ListFactory.then(function(response){
        $scope.ghostName = response.ghosts[0].name
        $scope.ghostIntro=response.ghosts[0].introduction
    })
})
app.controller('questCtrl', function($scope,ListFactory) {
    ListFactory.then(function(response){
        $scope.questTitle = response.ghosts[0].tasks[0].questTitle
        $scope.questIntro = response.ghosts[0].tasks[0].questIntro
    })
})

app.controller('questDescCtrl', function($scope,ListFactory) {
    ListFactory.then(function(response){
        $scope.questTitle = response.ghosts[0].tasks[0].questTitle
        $scope.questTip = response.ghosts[0].tasks[0].questIntro
    })
})

app.controller('userCtrl', function($scope,globalValues) {
	$scope.experience=globalValues.experience;
});

app.controller('karlCtrl', function($scope) {
	
});

app.controller('introCtrl', function($scope) {
  $scope.ghostName = "CeciliaMofo";
})

app.controller('historicalCtrl', function($scope, ListFactory) {
    ListFactory.then(function(response){
        $scope.items = response.ghosts
    })
});


//app.controller('historicalCtrl', function($scope,globalValues) {
  //$scope.items=globalValues.obj;
//});

app.controller('ceciliaCtrl', function($scope) {
	
});

app.controller('accomplishedCtrl', function($scope,globalValues) {
	$scope.items=globalValues.obj;
});

app.controller('hintCtrl', function($scope,$ionicPopup, $timeout,ListFactory) {
  ListFactory.then(function(response){
  $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Hint #1',
       template: response.ghosts[0].tasks[0].hint[0].message
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   }
  })
  $scope.hintNo = "2";
})

app.controller("fetchData", function($scope, $http) {
  ListFactory.then(function(response){
        $scope.items = response.ghosts
    })
$scope.ghosts= [];
$http.get('json/data.json').success(function(data) { 
    console.log("success!");
    $scope.ghosts = data.employees[0].firstName;
    console.log(data.employees[0].firstName);
    });    
});
