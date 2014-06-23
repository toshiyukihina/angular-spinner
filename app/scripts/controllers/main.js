'use strict';

angular.module('angularSpinnerApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.loading = false;
    $scope.save = function() {
      $scope.loading = true;
    };
    $scope.cancel = function() {
      $scope.loading = false;
    };
  }]);
