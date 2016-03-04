
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
      url: '/',
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
      controller:'successCtrl'
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
 })
});






