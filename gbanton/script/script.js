
//This div Element creats the API's to jQuery, Bootstrap, CDN, Font Awesome
document.getElementById("apiLINKS").innerHTML =
'<div>'+
'<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>'+
'<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>'+
'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">'+
'<link rel="stylesheet" type="text/css" href="../styles/styles.css">'+
'<link rel="stylesheet" type="text/css" href="../styles/font-awesome.min.css">'+
'<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">'+
'</div>';


//Element creating Top Navigation bar for all static pages.
document.getElementById("navMenu").innerHTML =
'<div class="menu">'+
 '<nav class="navbar navbar-default home-nav">'+
 '<div class ="container">'+
  '<ul class="nav nav-pills">'+
   '<li role="presentation" class="left"><a href="index.html">Music</a></li>'+
   '<li role="presentation" class="left"><a href="about.html">Biography</a></li>'+
   '<li role="presentation" class="left"><a href="records.html">Records</a></li>'+
   '<li role="presentation" class="left"><a href="media.html">Media</a></li>'+
   '<li role="presentation" class="left"><a href="gallery.html">Gallery</a></li>'+
   '<li role="presentation" class="left"><a href="links.html">Links</a></li>'+
   '<li role="presentation" class="left"><a href="simple_form.html">Contact</a></li>'+
  '</ul>'+
  // This is the to the right navbar which wil have the Social Media Icon, can also be put at the bottom footer navbar 
  // <ul class="nav navbar-nav">
  //  <li class="right"><i class="fa fa-facebook-official" aria-hidden="true"></i>
  //  <li class="right"><i class="fa fa-facebook-official" aria-hidden="true"></i>
  //  <li class="right"><i class="fa fa-facebook" aria-hidden="true"></i>
  // </ul>
  '</div>'+
 '</nav>'+
'</div>';

//Element creating Bottom Navigation bar for all static pages. 
document.getElementById("navBottom").innerHTML =
 '<nav class="navbar navbar-default navbar-fixed-bottom">'+
    '<div class="container">'+
      '<ul class="nav nav-pills">'+
       '<li role="presentation"><a href="simple_form.html">Booking</a></li>'+
       '<li role="presentation"><a href="records.html">Records</a></li>'+
       '<li role="presentation"><a href="media.html">Media</a></li>'+
       '<li role="presentation"><a href="simple_form.html">Contact</a></li>'+
       // '<li class="right"><i class="fa fa-facebook-official" aria-hidden="true"></i>'+
       // '<li class="right"><i class="fa fa-facebook-official" aria-hidden="true"></i>'+
       // '<li class="right"><i class="fa fa-facebook" aria-hidden="true"></i>'+
      '</ul>'+
    '</div>'+
    '</nav>';

$(".navMenu").on("click",function(){
  $(".navMenu").find(".active").removeClass("active");
  S(this).parent().addClass("active");
});

//This function allows navigation bar to in Navigation bar stick once passing logo
$(document).ready(function () {
    var menu = $('.menu');
    var origOffsetY = menu.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('.content').addClass('menu-padding');
        } else {
            $('.menu').removeClass('sticky');
            $('.content').removeClass('menu-padding');
        }
    }
    document.onscroll = scroll;
  });
//This creates the grid view and list view on the records page
angular.module('app',['ngRoute']).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/main', {
        controller: 'appController',
        templateUrl: 'main.html'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]).
  controller('appController', ['$scope', function($scope){
    $scope.view = 'list.html';
    $scope.data = [{
      text: '1'
    }, {
      text: '2'
    }, {
      text: '3'
    }, {
      text: '4'
    }, {
      text: '5'
    }, {
      text: '6'
    }];
  }]).
  directive('appView', function() {
    return {
      scope: {
        view: '=appView'
      },
      replace: true,
      template: '<nav class="navbar navbar-default">' +
                    '<div class="container">' +
                      '<ul class="nav navbar-nav navbar-right">' +
                        '<li ng-repeat="v in views" ng-bind="v.name" ng-class="v.icon" ng-click="switchView(v)"></li>' +
                      '</ul>' +
                    '</div>' +
                '</nav>',
      link: function(scope, el, attr) {
        scope.views = [{
          name: 'List',
          template: 'list.html',
          icon: 'btn btn-default navbar-btn glyphicon glyphicon-th-list'
        }, {
          name: 'Grid',
          template: 'grid.html',
          icon: 'btn btn-default navbar-btn glyphicon glyphicon-th'
        }];
      },
      controller: ['$scope', function($scope){
        $scope.switchView = function(view) {
          $scope.view = view.template;
        }
      }]
    }
  });