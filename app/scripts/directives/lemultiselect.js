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
      scope: {
        'currentValues': '=',
        'values': '=',
        'translationPrefix': '='
      },
      link: function postLink(scope, element, attrs) {

        scope.convertValues = function(values) {
          var selectedValues = [];
          _.each(values,function(item){
            selectedValues.push({id: item});
          }); 

          return selectedValues;
        };
        
        scope.settings = {'showCheckAll': false, 'showUncheckAll': false};
        scope.selectedValues = scope.convertValues(scope.currentValues); 

        var translation_values = _.map(scope.values, function(value) { 
          return {id: value, label: scope.translationPrefix + value.toUpperCase()} 
        });
        $translate(_.map(translation_values,function(value) {return value.label})).then(function(translations){
          scope.facilities = _.map(translation_values, function(value) {
            value.label = translations[value.label];
            return value;
          });
        });

        scope.$watch(scope.currentValues, function(newVal, oldVal) {
          if(_.isArray(newVal)) {
            scope.selectedValues = scope.convertValues(newVal); 
          }
        });

        scope.events = {
          onItemSelect: function(item) {
            if(item) {
              scope.currentValues.push(item.id);
            }
        }, onItemDeselect: function(item) {
            if(item) {
              var pos = scope.currentValues.indexOf(item.id);
              scope.currentValues.splice(pos, 1);
            }
        }};

        element.append('<div ng-dropdown-multiselect="" options="facilities" selected-model="selectedValues" extra-settings="settings" events="events"></div>');
        // we need to tell angular to render the directive
        $compile(element.contents())(scope);

      }
    };
  }]);
