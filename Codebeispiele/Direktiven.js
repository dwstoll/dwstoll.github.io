var myApp = angular.module('myApp', []);

myApp.directive('customButton', function () {
  return {
		restrict: 'A',
        replace: true,
		transclude: true,
		template: '<a href="" class="myawesomebutton" ng-transclude>' +
                      '<i class="icon-ok-sign"></i>' +
                  '</a>',
        link: function (scope, element, attrs) {
                // DOM manipulation/events here!
        }
    };
});