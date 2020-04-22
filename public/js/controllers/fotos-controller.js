angular.module('alurapic').controller('FotosController',function($scope, $http){
    $scope.fotos = []
    $scope.filtro = ""

    $http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto){
        $http.delete(`v1/fotos/${foto._id}`)
        .success(function(){
            //Evitar fazer mais um requisção ao servidor sem necessidade
            //Se a resposta foi de sucesso pode fazer a remoção aqui
            $scope.fotos = $scope.fotos.filter( ft => ft._id !== foto._id)
            $scope.mensagem = `Foto ${foto.titulo} removida com sucesso!`
            console.log("Foto removida com sucesso", foto._id)
        }).error(function(erro) {
            console.log(erro);
            $scope.mensagem = `Não foi pssível remover a Foto ${foto.titulo}!`
        })
    }
})