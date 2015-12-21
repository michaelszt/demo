//*

(function(){
    'use strict';

    angular
        .module('demo')
        .controller('TPSCtrl', TPSCtrl);

    TPSCtrl.$inject = ['$scope', '$reactive'];

    function TPSCtrl($scope, $reactive){
        $scope.subscribe('termparams');

        $scope.helpers({
            tps: function()  {
                return TermParams.find({});
            }
        });

        $scope.gridTPS = {
            columnDefs: [
                { name:'name', field: 'name', displayName:'Name', enableCellEdit:false },
                { name:'tag', field: 'tag', width:100, enableCellEdit:false },
                { name:'len', field: 'len',  displayName:'Length', width:100, enableCellEdit:false },
                { name:'val', field: 'val', displayName:'Value', enableCellEdit:true}
            ]
        };

        $scope.gridTPS.data = $scope.tps;

    }

})();

//*/

/*
angular.module("demo").controller("TPSCtrl",
    function ($scope, $meteorCollection) {

        $scope.tps = $scope.$meteorCollection(TermParams).subscribe('termparams');

        $scope.gridTPS = {
            columnDefs: [
                { name:'name', field: 'name', displayName:'参数名称', enableCellEdit:false },
                { name:'tag', field: 'tag', width:100, enableCellEdit:false },
                { name:'len', field: 'len',  displayName:'长度', width:100, enableCellEdit:false },
                { name:'val', field: 'val', displayName:'值', enableCellEdit:true}
            ]
        };

        $scope.gridTPS.data = $scope.tps;
    });

*/