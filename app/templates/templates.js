'use strict';

angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplateCtrl'
  }).
  when('/templates/:templateId', {
    templateUrl: 'templates/template-details.html',
    controller: 'TemplateDetailsCtrl'
  })
  
}])

.controller('TemplateCtrl', ['$scope','$http',function($scope,$http) {
  
   /* $http.get('json/templates.json').success(function(data){
        console.log('Json Received');
    })
    .error(function(response)){
           console.log('Error');
           });*/
    
    /*$http.get('json/templates.json').then(function(response){
        $scope.templates=response.data;
    });*/
    
    $http.get('json/templates.json').success(function(data){
        $scope.templates=data;
    });    
    
    console.log($scope);
    
}])

.controller('TemplateDetailsCtrl', ['$scope','$http',function($scope,$http) {
    console.log('TemplateDetailsCtrl');
}]);