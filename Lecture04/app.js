(function(){
'use strict';

angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
  $scope.name = "RootHuang";
  $scope.sayHello = function(){
    return "Hello Coursera!"
  };

});

})();
