angular.module('ucsalApp').controller('FinanceiroCtrl', function ($scope, $ionicLoading, FinanceiroService) {
  $scope.semestres = FinanceiroService.listarSemestres();
  $scope.filtro = { semestre: $scope.semestres[$scope.semestres.length - 1] };

  $scope.carregar = function () {
    $scope.mensalidades = FinanceiroService.listarMensalidades($scope.filtro.semestre);
  };

  $scope.copiarCodigo = function (mensalidade) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(mensalidade.codigoBarras).catch(function () {});
    }

    $ionicLoading.show({
      template: 'Código de barras copiado!',
      duration: 1800
    });
  };

  $scope.carregar();
});
