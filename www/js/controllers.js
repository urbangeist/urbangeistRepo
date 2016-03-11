var app = angular.module('controllers', ['ui.router'])

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

app.controller('userCtrl', function($scope,$cordovaGeolocation,ListFactory, $state, $stateParams, $cordovaVibration) {
	ListFactory.then(function(response){
    var latGhost = response.ghosts[0].location.latitude
    var lonGhost = response.ghosts[0].location.longitude
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      var lat=position.coords.latitude
      var lon=position.coords.longitude
      const radius = 0.029//0.002382
      if(lat>(latGhost-radius)&&lat<(latGhost+radius)&&lon>(lonGhost-radius)&&lon<(lonGhost+radius)){
        $cordovaVibration.vibrate(500);
        $state.go("intro")
        //IMPORTANT 
        //When is this variable false?
        $scope.haunted=true
      }else{
        $scope.haunted=false
      }
    }, function(error){
        console.log("Could not get location");
    });
  })
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
app.controller('successCtrl', function($scope,ListFactory,$cordovaCamera, $cordovaFileTransfer, $state, $stateParams,$http) {
	ListFactory.then(function(response){
        $scope.questOutput = response.ghosts[0].tasks[0].output
    })
  $scope.takePicture = function() {
     
    var options = { 
      quality : 75, 
      destinationType : Camera.DestinationType.DATA_URI, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true
    };
     
    $cordovaCamera.getPicture(options).then(function(imageData) {
      var url = "http://ciprianamaritei.com/urbanfbls/upload.php";
      //console.log("data:image/jpeg;base64," + imageData)
      var targetPath = imageData;
      var filename = targetPath.split("/").pop();
     var optionsFtp = {
          fileKey: "file",
          fileName: filename,
          chunkedMode: false,
          mimeType: "image/jpg",
          params : {'directory':'files', 'fileName':filename}
      };

      $cordovaFileTransfer.upload(url, targetPath, optionsFtp).then(function (result) {
          console.log("SUCCESS: " + JSON.stringify(result.response));
          var id="5"
          var base="http://ciprianamaritei.com/urbanfbls/connect.php?com=add&id="+id+"&url="+String(filename)
          $http.post(base).success(function(res){
            //console.log(res);
          }).error(function(error){
            //console.log(error);
          });
          $state.go("journey")
      }, function (err) {
          //console.log("ERROR: " + JSON.stringify(err));
      }, function (progress) {
          // PROGRESS HANDLING GOES HERE
      });
    }, function(err) {
      //console.log("error with the camera")
        // An error occured. Show a message to the user
    });
  }
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

app.controller('journeyCtrl', function($scope,$http) {
  // FAKE CONTENT FOR THE DEMO
  var id="5"
  $http.get('http://ciprianamaritei.com/urbanfbls/connect.php?id='+id+'&com=search').then(function(response) {
    $scope.url = response.data[0].url
    console.log(response);
      //console.log(response.url);
      //console.log(response.id);
    }, function(response) {
      //console.log(response.status);
  });

  $scope.timeline = [{
  	date: new Date(),
  	picture:"https://pixabay.com/static/uploads/photo/2014/07/27/20/29/landscape-403165_960_720.jpg",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"http://res.freestockphotos.biz/pictures/5/5695-an-autumn-landscape-with-green-grass-pv.jpg",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"http://images.nationalgeographic.com/wpf/media-live/photos/000/714/overrides/canada-view-niblet_71483_600x450.jpg",
  	text: "Lorem ipsum dolor sit amet",
  },{
  	date: new Date(),
  	picture:"https://pixabay.com/static/uploads/photo/2015/11/07/11/12/landscape-1030916_960_720.jpg",
  	text: "Lorem ipsum dolor sit amet",
  }]
})