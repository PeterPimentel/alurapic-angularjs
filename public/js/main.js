// Modulo principal da aplicação
// Nome usando no ng-app
angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
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
        templateUrl:'partials/foto.html'
    })

    //Caso a rota não bata com nenhuma das opções
    $routeProvider.otherwise({ redirectTo:'/fotos'})
})