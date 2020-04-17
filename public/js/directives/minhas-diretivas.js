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
})