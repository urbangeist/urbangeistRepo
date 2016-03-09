var app = angular.module('controllers', [])

app.value("hintsNr", 3)

app.controller('howtoCtrl', function($scope) {
});

app.controller('introCtrl', function($scope, ListFactory) {
	ListFactory.then(function(response){
        $scope.ghostName = response.ghosts[0].name
        $scope.ghostIntro = response.ghosts[0].introduction
    })
})
app.controller('bio', function($scope, ListFactory) {
    ListFactory.then(function(response){
        $scope.ghostName = response.ghosts[0].name
        $scope.ghostIntro = response.ghosts[0].introduction
    })
})
app.controller('questCtrl', function($scope,ListFactory) {
    ListFactory.then(function(response){
        $scope.questTitle = response.ghosts[0].tasks[0].title
        $scope.questIntro = response.ghosts[0].tasks[0].questIntro
        $scope.questDuration = response.ghosts[0].tasks[0].questDuration
    })
})

app.controller('questDescCtrl', function($scope,ListFactory) {
    ListFactory.then(function(response){
        $scope.questTitle = response.ghosts[0].tasks[0].title
        $scope.questTip1 = response.ghosts[0].tasks[0].taskDescription[0].message
        $scope.questTip2 = response.ghosts[0].tasks[0].taskDescription[1].message
        $scope.showTip = function() {
          angular.element(document).find('.cardTips').remove();
          //angular.element('.cardTips').hide();
        };
    })
})

app.controller('userCtrl', function($scope) {
	//$scope.experience=globalValues.experience;
});

app.controller('karlCtrl', function($scope) {
	
});

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

app.controller('accomplishedCtrl', function($scope,ListFactory) {
	ListFactory.then(function(response){
        $scope.questOutput = response.ghosts[0].tasks[0].output
    })
});
app.controller('successCtrl', function($scope,ListFactory) {
	ListFactory.then(function(response){
        $scope.questOutput = response.ghosts[0].tasks[0].output
    })
});



app.controller('hintCtrl', function($scope,$ionicPopup,ListFactory,hintsNr) {
  ListFactory.then(function(response){
  $scope.hintsNr = hintsNr;
  
  $scope.getHints = function() {
    if (hintsNr==0) {
      return true;
    }else{
      return false;
    }
  }
  
  $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Hint',
       template: response.ghosts[0].tasks[0].hint[0].message
     });
     hintsNr--;
     $scope.hintsNr=hintsNr;
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   }
  })
 // $scope.hintNo = "2";
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

app.controller('journeyCtrl', function($scope) {
  // FAKE CONTENT FOR THE DEMO
  $scope.timeline = [{
  	date: new Date(),
  	picture:"fiji.png",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"spring.png",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"fiji.png",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"fiji.png",
  	text: "Lorem ipsum dolor sit amet",
  }]
})