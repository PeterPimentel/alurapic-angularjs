angular.module('alurapic').controller('fotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){
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
            cadastroDeFotos.cadastrar($scope.foto).then(function(dados){
                $scope.mensagem = dados.mensagem
                if(dados.inclusao){
                    $scope.foto = {}
                }
            }).catch(function(dados){
                $scope.mensagem = dados.mensagem
            })
        }
    }
})
