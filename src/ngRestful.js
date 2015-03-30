

(function (window, angular) {
	'use strict';
	var module = angular.module("ngRestful", []);
	module.directive('ngRestful', ["$http", function ($http) {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				restModel: '=',
				restUrl: '=',
				restMethod: '@',
				restParams: '=',
				restSuccess: '&',
				restError: '&',
				restWatchUrl: '@',
				restWatchParams: '@'
			},
			template: "<div class='ng-restful' ng-transclude></div>",
			controller: function ($scope) {

				var runRestCall = function () {
					$http[$scope.restMethod.toLowerCase()]($scope.restUrl, $scope.restParams).success(function (data, status, config, headers) {

						$scope.restModel = data;
						$scope.restSuccess()(data, status, config, headers);

					}).error(function (data, status, config, headers) {

						$scope.restError()(data, status, config, headers);

					});
				}

				if ($scope.restWatchUrl == true) {
					$scope.$watch('restUrl', function () {
						runRestCall();
					});
				}

				if ($scope.restWatchParams == true) {
					$scope.$watch('restParams', function () {
						runRestCall();
					});
				}
				runRestCall();
			}
		};
	}]);
	module.directive('ngRestfulForm', ["$http", function ($http) {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				restModel: '=',
				restUrl: '=',
				restMethod: '@',
				restSuccess: '&',
				restError: '&'
			},
			template: "<form class='ng-restful-form' ng-transclude></form>",
			controller: function ($scope) {

				$scope.restfulFormSubmit = function () {
					$http[$scope.restMethod.toLowerCase()]($scope.restUrl, $scope.restModel).success(function (data, status, config, headers) {

						$scope.restSuccess()(data, status, config, headers);

					}).error(function (data, status, config, headers) {

						$scope.restError()(data, status, config, headers);

					});
				};
			},
			link: function (scope, elem, attrs, ngCtrl) {
				elem.bind('submit', function ($event) {
					$event.preventDefault();
					scope.restfulFormSubmit();
				});
			}
		};
	}]);
})(window, window.angular);