'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:leMultiselect
 * @description
 * # leMultiselect
 */
angular.module('leexplorerFrontendApp')
  .directive('leMultiselect', ['$translate', '$compile', function ($translate, $compile) {
    return {
      restrict: 'E',
      template: '<div ng-dropdown-multiselect="" options="facilities" selected-model="selectedValues" extra-settings="settings" events="events"></div>',
      scope: {
        'currentValues': '=',
        'values': '=',
        'translationPrefix': '='
      },
      controller: function($scope, $translate, $compile) {
        var convertValues = function(values) {
          return _.map(values, function(item){
            return {id: item};
          });
        }

        var selectedValues = convertValues($scope.values);
        
        $scope.settings = {'showCheckAll': false, 'showUncheckAll': false};
        $scope.selectedValues = convertValues($scope.currentValues); 

        var translation_values = _.map($scope.values, function(value) { 
          return {id: value, label: $scope.translationPrefix + value.toUpperCase()} 
        });
        $translate(_.map(translation_values,function(value) {return value.label})).then(function(translations){
          $scope.facilities = _.map(translation_values, function(value) {
            value.label = translations[value.label];
            return value;
          });
        });

        $scope.$watch($scope.currentValues, function(newVal, oldVal) {
          if(_.isArray(newVal)) {
            $scope.selectedValues = convertValues(newVal); 
          }
        });

        $scope.events = {
          onItemSelect: function(item) {
            if(item) {
              $scope.currentValues.push(item.id);
            }
        }, onItemDeselect: function(item) {
            if(item) {
              var pos = $scope.currentValues.indexOf(item.id);
              $scope.currentValues.splice(pos, 1);
            }
        }};
      }
    };
  }]);
