//recursoFoto é um serviço criado que fica dentro do modulo meusServicos
angular.module('alurapic').controller('FotosController',function($scope, recursoFoto){
    $scope.fotos = []
    $scope.filtro = ""

    //Trazer todas as fotos
    recursoFoto.query(function(fotos){
        //O objeto retornado pelo resource é um recurso com alguns metodos CRUD já incluidos
        // save, remove and delete
        $scope.fotos = fotos
    },function(err){
        console.log(err)
    })

    $scope.remover = function(foto){
        //Atribuindo valor ao parametro
        //Não foi necessário fazer concatenação de string ou qualquer coisa parecida
        recursoFoto.delete({fotoId: foto._id}, function(){
            //Evitar fazer mais um requisção ao servidor sem necessidade
            //Se a resposta foi de sucesso pode fazer a remoção aqui
            $scope.fotos = $scope.fotos.filter( ft => ft._id !== foto._id)
            $scope.mensagem = `Foto ${foto.titulo} removida com sucesso!`
        }, function(err){
            console.log(erro);
            $scope.mensagem = `Não foi pssível remover a Foto ${foto.titulo}!`
        })
    }
})