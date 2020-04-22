angular.module('alurapic').controller('GruposController',function($http, $scope){
    $scope.grupos = [];    

    $http.get('/v1/grupos')
    .success(function(grupos) {
        $scope.grupos = grupos;
    })
    .error(function(erro) {
        console.log(erro);
    });

})