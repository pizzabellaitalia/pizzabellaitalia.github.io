(function () {
     var app = angular.module("app", ['ngRoute']);
 
     app.controller("menuController", function ($scope) {

     	$scope.pizzaVisibility = false;
     	$scope.calzoneVisibility = false;
     	$scope.panVisibility = false;
     	$scope.pupusasVisibility = false;
     	$scope.hamburguerVisibility = false;

     	$scope.showPizza = function(){
     		$scope.pizzaVisibility = true;
     	};

     	$scope.hidePizza = function(){
     		$scope.pizzaVisibility = false;
     	};

     	$scope.showCalzone = function(){
     		$scope.calzoneVisibility = true;
     	};

     	$scope.hideCalzone = function(){
     		$scope.calzoneVisibility = false;
     	};

     	$scope.showPan = function(){
     		$scope.panVisibility = true;
     	};

     	$scope.hidePan = function(){
     		$scope.panVisibility = false;
     	};

     	$scope.showPupusas = function(){
     		$scope.pupusasVisibility = true;
     	};

     	$scope.hidePupusas = function(){
     		$scope.pupusasVisibility = false;
     	};

     	$scope.showHamburguer = function(){
     		$scope.hamburguerVisibility = true;
     	};

     	$scope.hideHamburguer = function(){
     		$scope.hamburguerVisibility = false;
     	};
     });
     })();