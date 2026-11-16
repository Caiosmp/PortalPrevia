angular.module('ucsalApp').controller('NoticiasCtrl', function ($scope, $state, $stateParams, NoticiasService) {
  $scope.noticias = NoticiasService.listar();
  $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
  $scope.filtro = { categoria: '' };

  $scope.filtrar = function (categoria) {
    $scope.filtro.categoria = categoria;
  };

  $scope.lerMais = function (noticia) {
    $state.go('app.noticia', { id: noticia.id });
  };
});
