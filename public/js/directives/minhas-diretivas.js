angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
    //Objeto obrigatorio Directive Definition Objec
    const ddo = {
        //como ele será utilizado
        //A-notation = <div meu-painel
        //E-lement = <meu-painel
        restric:"AE",
        //scope local do componente
        scope:{
            titulo:'@' // @ - indica que o valor vai ser passado como string
            //se atributo diferetente ex meu-titulo : @meu-titulo
        },
        //permitir a inserção de elementos filhos
        //ng-transclude no local a ser inserido
        transclude:true,

        templateUrl:'js/directives/meu-painel.html'
    }

    return ddo
}).directive('minhaFoto',function(){
    const ddo = {
        restric:"AE",
        scope:{
            titulo:'@',
            url:'@'
        },
        templateUrl:'js/directives/minha-foto.html'
    }

    return ddo
}).directive('meuBotaoPerigo',function(){
    const ddo = {
        restric:"E",
        scope:{
            nome:'@', //Passado como string
            acao:'&' //Significa que estou passando uma expressão
            //Essa expressão será avaliada no contexto/scope do controller chamado 
        },
        template:'<button ng-click="acao(data)" class="btn btn-danger btn-block">{{nome}}</button>'
    }

    return ddo
}).directive('meuFocus', function(){
    const ddo = {
        restric: "A",
        scope: {
            focado:'=' //Comunicação bidirecional e avalia o valot da propriedade
        },
        //colocando um watcher de propriedade
        //Quando a prop focado mudar o link será executado
        //Scope da diretiva
        // element que recebeu o atributo
    }

    ddo.link = function(scope, element){
        /**
         * Por que mudar?
         * Muitos watchers geram problemas de performance
         * //Versão utilizando o watch / foto-controller
         * //propriedade que ficarei monitorando
         * scope.$watch('focado', function(){ // O que fazer quando ela mudar..
            * if(scope.focado){
            *  //manipulação de DOM são permitidas apenas nas diretivas
            *  //O angular usa jqLite(lembra um jquery mais fraco) para realizar as manipulações de dom
            *  //Se o script do jquery tivesse sido carregado antes o angular fária a substituição

            *       element[0].focus()
                    //Controller e diretiva tem acesso ao mesmo local
            *       scope.focado = false
            *  }
         *  })
        */

        //Versão com broadcast
        scope.$on('fotoCadastrada', function(){
            element[0].focus()
        })
    }

    return ddo
})