angular.module('alurapic').controller('fotoController', function($scope, $routeParams, recursoFoto){
    $scope.foto = {}
    $scope.mensagem = ''

    if($routeParams.fotoId){
        recursoFoto.get({fotoId:$routeParams.fotoId}, function(foto){
            $scope.foto = foto
        },function(err){
            console.log(err)
            $scope.mensagem = "Não foi possível carregar a foto selecionada."
        })
    }

    $scope.submeter = function(){
        //Verifica se o formulario está valuido
        // Usar o name do formulario
        if($scope.formulario.$valid){
            if($scope.foto._id){
                recursoFoto.update({fotoId:$scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem = "Foto atualizada com sucesso."
                }, function(err){
                    $scope.mensagem = "Não foi possível atualizar a foto."
                    console.log(err)
                })
            }else{
                recursoFoto.save($scope.foto, function(){
                    $scope.mensagem = "Foto cadastrada com sucesso."
                    $scope.foto={}
                },function(err){
                    $scope.mensagem = "Não foi possível incluir a foto."
                    console.log(err)
                })
            }
        }
    }
})