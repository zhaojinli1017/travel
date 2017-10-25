app.factory("server",function($http,$q){
    return {
        getData:function(){
            var def = $q.defer();
            $http({
                mothed:"get",
                url:"http://localhost:8090/?Data"
            }).then(function(data){
                def.resolve(data);
            })
            return def.promise;
        }
    }
})