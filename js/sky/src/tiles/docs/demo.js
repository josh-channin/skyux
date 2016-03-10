/*global angular, alert */
(function () {
    'use strict';

    function TileDashboardConfig($stateProvider) {
        $stateProvider
        .state('tiledashboard', {
            url: '',
            views: {
                'tile1': {
                    controller: 'Tile1Controller as tile1Ctrl',
                    templateUrl: 'demo/tile/tile1.html'
                },
                'tile2': {
                    controller: 'Tile2Controller',
                    templateUrl: 'demo/tile/tile2.html'
                },
                'tile3': {
                    controller: 'Tile3Controller',
                    templateUrl: 'demo/tile/tile3.html'
                },
                'tile4': {
                    controller: 'Tile4Controller',
                    templateUrl: 'demo/tile/tile4.html'
                },
                'tile5': {
                    controller: 'Tile5Controller',
                    templateUrl: 'demo/tile/tile5.html'
                },
                'tile6': {
                    controller: 'Tile6Controller',
                    templateUrl: 'demo/tile/tile6.html'
                },
                'tile7': {
                    controller: 'Tile7Controller',
                    templateUrl: 'demo/tile/tile7.html'
                },
                'tile8': {
                    controller: 'Tile8Controller',
                    templateUrl: 'demo/tile/tile8.html'
                },
                'tile9': {
                    controller: 'Tile9Controller',
                    templateUrl: 'demo/tile/tile9.html'
                },
                'tile10': {
                    controller: 'Tile10Controller',
                    templateUrl: 'demo/tile/tile10.html'
                }
            }
        });
    }

    function Tile1Controller() {
        var self = this;

        self.resources = {
            tile_header: 'Tile header'
        };

        self.openSettings = function () {
            alert('Settings invoked!');
        };
    }

    function TileTestController(bbModal) {
        var self = this;


        function collapseAll() {
            self.allCollapsed = true;
        }

        self.collapseAll = collapseAll;

        function expandAll() {
            self.allCollapsed = false;
        }

        self.expandAll = expandAll;

        self.open = function () {
            bbModal.open({
                template: '<bb-modal>' +
                      '    <div class="modal-form">' +
                      '        <bb-modal-header bb-modal-help-key="\'bb-security-users.html\'">Form Header</bb-modal-header>' +
                      '        <div class="bb-modal-body-tiled" bb-modal-body>' +
                      '            <bb-tile bb-tile-header="\'Tile header\'">' +
                      '                <div bb-tile-section>' +
                      '                    Test.' +
                      '                </div>' +
                      '            </bb-tile>' +
                      '        </div>' +
                      '        <bb-modal-footer>' +
                      '            <bb-modal-footer-button-primary></bb-modal-footer-button-primary>' +
                      '            <bb-modal-footer-button-cancel></bb-modal-footer-button-cancel>' +
                      '        </bb-modal-footer>' +
                      '    </div>' +
                      '</bb-modal>'
            });
        };

        self.tiles = [
            {
                id: 'Tile1',
                view_name: 'tile1',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile2',
                view_name: 'tile2',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile3',
                view_name: 'tile3',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile4',
                view_name: 'tile4',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile5',
                view_name: 'tile5',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile6',
                view_name: 'tile6',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile7',
                view_name: 'tile7',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile8',
                view_name: 'tile8',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile9',
                view_name: 'tile9',
                collapsed: false,
                collapsed_small: false
            },
            {
                id: 'Tile10',
                view_name: 'tile10',
                collapsed: false,
                collapsed_small: false
            }
        ];

        self.layout = {
            one_column_layout: [
                'Tile1',
                'Tile2',
                'Tile3',
                'Tile4',
                'Tile5',
                'Tile6',
                'Tile7',
                'Tile8',
                'Tile9',
                'Tile10'
            ],
            two_column_layout: [
                [
                    'Tile1',
                    'Tile3',
                    'Tile5',
                    'Tile7',
                    'Tile9'
                ],
                [
                    'Tile2',
                    'Tile4',
                    'Tile6',
                    'Tile8',
                    'Tile10'
                ]

            ]
        };

    }

    TileDashboardConfig.$inject = ['$stateProvider'];
    TileTestController.$inject = ['bbModal'];


    angular.module('stache')
    .config(TileDashboardConfig)
    .controller('TileTestController', TileTestController)
    .controller('Tile1Controller', Tile1Controller)
    .controller('Tile2Controller', angular.noop)
    .controller('Tile3Controller', angular.noop)
    .controller('Tile4Controller', angular.noop)
    .controller('Tile5Controller', angular.noop)
    .controller('Tile6Controller', angular.noop)
    .controller('Tile7Controller', angular.noop)
    .controller('Tile8Controller', angular.noop)
    .controller('Tile9Controller', angular.noop)
    .controller('Tile10Controller', angular.noop);
}());
