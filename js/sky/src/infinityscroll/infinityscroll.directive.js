/*global angular */
(function () {
    'use strict';

    function bbInfinityScroll($window, $timeout) {

        function link($scope, el, attr, vm) {
            var windowEl = angular.element($window),
                scopeId = $scope.id;

            function infinityScrollInView() {
                return windowEl.scrollTop() + windowEl.height() > el.offset().top;
            }

            windowEl.on('scroll.' + scopeId, function () {
                if (vm.hasMore && !vm.isLoading) {
                    $timeout(function () {
                        if (infinityScrollInView()) {
                            vm.loadingCallback();
                        }
                    });
                }
            });

            $scope.$watch(function () {
                return vm.isLoading;
            }, function (newValue, oldValue) {
                if (oldValue && !newValue && infinityScrollInView()) {
                    vm.loadingCallback();
                }
            });

            $scope.$on('$destroy', function () {
                windowEl.off('scroll.' + scopeId);
            });
        }

        return {
            link: link,
            controller: angular.noop,
            require: 'bbInfinityScroll',
            controllerAs: 'bbInfinityScroll',
            scope: {},
            bindToController: {
                hasMore: '=bbInfinityScrollHasMore',
                loadingCallback: '&bbInfinityScrollLoad',
                isLoading: '=bbInfinityScrollIsLoading'

            },
            restrict: 'E',
            templateUrl: 'sky/templates/infinityscroll/infinityscroll.directive.html'
        };
    }

    bbInfinityScroll.$inject = ['$window', '$timeout'];

    angular.module('sky.infinityscroll.directive', [])
        .directive('bbInfinityScroll', bbInfinityScroll);
}());
