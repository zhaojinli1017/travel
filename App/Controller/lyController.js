app.controller("lyController",["$scope","server",function($scope,server){
    server.getData().then(function(data){
        $scope.datas = data.data;
        //console.log($scope.datas)
    })
}])