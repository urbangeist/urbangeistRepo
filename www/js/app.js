// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('urbangeist', ['ionic'])

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
      url: '/intro',
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
    url: '/',
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
  .state('Cecilia Nilson', {
    url: '/cecilia',
    templateUrl: 'templates/cecilia.html',
    controller:'ceciliaCtrl'
  })
  .state('Karl Karlson', {
    url: '/karl',
    templateUrl: 'templates/karl.html',
    controller:'karlCtrl'
  })
}).factory("globalValues",function(){
  return{
    ghosts:[
      {ghostName: "Cecilia Nilson",date:"02/02/2016",taskName:"roses are red"},
      {ghostName: "Karl Karlson",date:"06/01/2016",taskName:"Pickpocket"}
    ],
    experience:"19"
  };
});
    






