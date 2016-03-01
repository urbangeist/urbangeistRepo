// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('urbangeist', ['ionic','howto.ctrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


var app = angular.module('urbangeist', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  
    $stateProvider
    .state('intro', {
      url: '/intro',
      templateUrl: 'templates/intro.html',
      controller:'introCtrl'
    })
    .state('quest', {
      url: '/quest',
      templateUrl: 'templates/quest.html',
      controller:'questCtrl'
    })
    .state('journey', {
      url: '/journey',
      templateUrl: 'templates/journey.html',
     // controller:'journeyCtrl'
    })
    .state('questDescription', {
      url: '/questDescription',
      templateUrl: 'templates/quest-description.html',
      controller:'questDescCtrl'
    })
    .state('howto', {
      url: '/howto',
      templateUrl: 'templates/howto.html',
      controller:'howtoCtrl'
    })
});

app.controller('introCtrl', function($scope) {
	$scope.ghostName = "CeciliaMofo";
})

app.controller('questCtrl', function($scope) {
	$scope.ghostIntroduction = "This is my Ghost introduction..";
})

app.controller('questDescCtrl', function($scope) {
	$scope.questTitle = "Where the pink rose lays, there will be blood..";
  $scope.questTip = "I need to find the Salvation Army";
})

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
  //$scope.hintDesc = "The Salvation Army creates dramatic sceneries to be used for education. They ofter hire me to take photos of these scences";
})

app.controller('ghostHistory', function($scope) {
  $scope.items = [
    {title: "Item 1"},
    {title: "Item 2"},
    {title: "Item 3"},
    {title: "Item 4"},
    {title: "Item 5"},
  ]
  $scope.data = {
    showReordering: false
  }
})



