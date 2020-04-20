angular.module('alurapic').controller('fotoController', function($scope, $http){
    $scope.foto = {}
    $scope.mensagem=''

    $scope.submeter = function(){
        //Verifica se o formulario está valuido
        // Usar o name do formulario
        if($scope.formulario.$valid)
        $http.post('v1/fotos', $scope.foto)
        .success(function(){
            $scope.mensagem = "Foto cadastrada com sucesso."
            $scope.foto={}
        })
        .error(function(err){
            $scope.mensagem = "Não foi possível incluir a foto."
            console.log(err)
        })
    }
})