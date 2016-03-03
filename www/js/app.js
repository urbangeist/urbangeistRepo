// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var obj;
angular.module('urbangeist', ['ionic','controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
    
    $stateProvider
    .state('intro', {
      url: '/',
      templateUrl: 'templates/intro.html',
      controller:'introCtrl'
    })
    .state('meetGhost', {
      url: '/meetGhost',
      templateUrl: 'templates/meet-ghost.html',
      //controller:'meetGhostCtrl'
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
    .state('bio', {
      url: '/bio',
      templateUrl: 'templates/bio.html',
      controller:'bio'
    })
    .state('reject', {
      url: '/reject',
      templateUrl: 'templates/rejectQuest.html',
      //controller:'rejectCtrl'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'templates/success.html',
      //controller:'rejectCtrl'
    })
    .state('howto', {
    url: '/howto',
    templateUrl: 'templates/howto.html',
    controller:'howtoCtrl'
  })
  .state('user', {
    url: '/user',
    templateUrl: 'templates/user.html',
    controller:'userCtrl'
  })
  .state('accomplished', {
    url: '/accomplished',
    templateUrl: 'templates/accomplished.html',
    controller:'accomplishedCtrl'
  })
  .state('historical', {
    url: '/historical',
    templateUrl: 'templates/historical.html',
    controller:'historicalCtrl'
  })
  .state('Cecilia Nelson', {
    url: '/cecilia',
    templateUrl: 'templates/cecilia.html',
    controller:'ceciliaCtrl'
  })
  .state('Karl Gustaf', {
    url: '/karl',
    templateUrl: 'templates/karl.html',
    controller:'karlCtrl'
  })
})

.factory("ListFactory",function($http){
  return $http.get('json/data.json').then(function (response) {
     if (response.data.error) {
         return null;
     } else {
         return response.data;
     }
 });
});

 /*
$http.get('json/data.json').success(function(data) {
      obj=data.ghosts
      for (var i=0;i<data.ghosts.length;i++) {
          console.log(String(obj[i].name))
      }
  })
  return{
        obj,
        experience:"19"
      }
 */       

/*
var entities={}
  var obj={}
  
      */






