//
// ALEX LATHAM & NICK WANNIGNER 2016
//

// This is the Angular app controller file. You probably shouldn't mess around with this stuff.

var app = angular.module('ranch', ['ngMaterial', 'smoothScroll'])
.config(function($mdThemingProvider) {

var customAccent = {
  '50': '#1e441f',
  '100': '#255627',
  '200': '#2d682f',
  '300': '#357a38',
  '400': '#3d8b40',
  '500': '#449d48',
  '600': '#5cb860',
  '700': '#6ec071',
  '800': '#80c883',
  '900': '#92cf94',
  'A100': '#5cb860',
  'A200': '#4CAF50',
  'A400': '#449d48',
  'A700': '#a3d7a5'
};

$mdThemingProvider.definePalette('customAccent', customAccent);

$mdThemingProvider.theme('default')
 .primaryPalette('blue')
 .accentPalette('customAccent');
});

app.controller("appCtrl", function($scope, $rootScope, $mdDialog, $mdToast, $mdMedia){
  $scope.showCabin = function(ev) {
    console.log(ev)
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'cabin-info.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .openFrom('#cabin-box')

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showBunk = function(ev) {
    console.log(ev)
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'bunk-info.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .openFrom('#cabin-box')

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.close = function() {
      $mdDialog.cancel();
    };
  }
});
