angular.module('alurapic').controller('fotoController', function($scope, $http, $routeParams){
    $scope.foto = {}
    $scope.mensagem = ''

    if($routeParams.fotoId){
        $http.get(`v1/fotos/${$routeParams.fotoId}`)
        .success(function(foto){
            $scope.foto = foto
        })
        .error(function(err){
            console.log(err)
            $scope.mensagem = "Não foi possível carregar a foto selecionada."
        })
    }

    $scope.submeter = function(){
        //Verifica se o formulario está valuido
        // Usar o name do formulario
        if($scope.formulario.$valid)
        if($scope.foto._id){
            $http.put(`v1/fotos/${$scope.foto._id}`, $scope.foto)
            .success(function(){
                $scope.mensagem = "Foto atualizada com sucesso."
                $scope.foto={}
            })
            .error(function(err){
                $scope.mensagem = "Não foi possível atualizar a foto."
                console.log(err)
            })
        }else{
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
    }
})