  // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('urbangeist', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //$cordova.plugins.someFunction().then(success, error);
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //cordova.plugins.vibration().then(success, error);
      //console.log(navigator.vibrate);
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
.controller('control',function($scope,$cordovaVibration){
  $scope.text="hola"
  $scope.vibe=function(){
    $scope.name="Cecilia";
    $cordovaVibration.vibrate(100);
  };
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'index.html'
  })
  .state('details',{
    url:'/',
    templateUrl:'details.html'
  })
});