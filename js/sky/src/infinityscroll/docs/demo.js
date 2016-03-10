/*global angular */
(function () {
    'use strict';

    function InfinityScrollDemoController($timeout) {
        var vm = this,
            idCount = 6,
            itemStuff = [
                {
                    id: 1,
                    name: 'Bluh',
                    description: 'A description for Bluh guh'
                },
                {
                    id: 2,
                    name: 'Shuh',
                    description: 'A description for Shuh guh'
                },
                {
                    id: 3,
                    name: 'Nuh',
                    description: 'A description for Nuh guh'
                },
                {
                    id: 4,
                    name: 'Muh',
                    description: 'A description for Muh guh'
                },
                {
                    id: 5,
                    name: 'Huh',
                    description: 'A description for Huh guh'
                }
            ];

        vm.data = itemStuff;

        vm.hasMore = true;

        vm.loadFn = function () {
            vm.loading = true;
            $timeout(function () {

                var i,
                    newStuff = [];
                for (i = 0; i < 5; i++) {
                    newStuff.push({
                        id: idCount,
                        name: "Another one " + idCount,
                        description: 'A description for another one ' + idCount
                    });
                    idCount++;
                }
                vm.data = vm.data.concat(newStuff);
                vm.loading = false;

                if (idCount > 25) {
                    vm.hasMore = false;
                }
            }, 2000);

        };
    }

    InfinityScrollDemoController.$inject = ['$timeout'];

    angular.module('stache')
        .controller('InfinityScrollDemoController', InfinityScrollDemoController);
}());
