  var app = angular
    .module('calc', [])
    .controller('myController', function($scope) {
      var bs = [
        {n: "+"},
        {n: "7"}, 
        {n: "8"}, 
        {n: "9"},
        {n: "-"}, 
        {n: "4"}, 
        {n: "5"}, 
        {n: "6"},
        {n: "*"}, 
        {n: "1"}, 
        {n: "2"}, 
        {n: "3"}, 
        {n: "/"},
        {n: "."},
        {n: "0"}
      ];
      $scope.bs = bs;
      $scope.doMath  = function(i) {
        $scope.i = "";
        $scope.i = eval(i);
      };
    });

