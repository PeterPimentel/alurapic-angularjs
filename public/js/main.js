// Modulo principal da aplicação
// Nome usando no ng-app
//Necessário importar os scrips [ngAnimate, ngRoute] Relizar animações / Controle de rotas
angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){

    //Desabilita a necessida de usar o # nas rotas usando a history API
    //O backend precisa estar preparado para atender essa demanda
    //No index também precisa ser importado um arquivo
    $locationProvider.html5Mode(true)

    // Rota /#/fotos
    $routeProvider.when('/fotos',{
        templateUrl:'partials/principal.html',
        controller: 'FotosController'
    })

    // /#/fotos/new
    $routeProvider.when('/fotos/new',{
        templateUrl:'partials/foto.html',
        controller: 'fotoController'
    })

    $routeProvider.when('/fotos/edit/:fotoId',{
        templateUrl:'partials/foto.html',
        controller: 'fotoController'
    })

    //Caso a rota não bata com nenhuma das opções
    $routeProvider.otherwise({ redirectTo:'/fotos'})
})