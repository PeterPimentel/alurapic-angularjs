//Quando a lógica de um controller é necessária em outro controller o ideal
//é isolar aquela lófgica em um serviço, e os controllers recebem a instancia daquele serviço
//factory sempre retorna um objeto com as ações que devem ser executadas
//recursoFoto é o nome do serviço
//IMPORTANTE dizer no modulo principal que usa o modulo meusServicos
angular.module('meusServicos',['ngResource']).factory('recursoFoto',function($resource){

    //Nesse caso retornando a instancia de um resource configurada
    //Resource é tipo um http bombado ele é especializado em trabalhar com APIs
    //Uma vez definida a url e o backend trabalhando com os padrões de uma API
    //O resource ira lidar internamente com as transformações de url e metodo
    return $resource('v1/fotos/:fotoId', null, { //fotoId é o parametrô que será passado nas requisições
        update: {method: 'PUT'}
    })
})