angular.module('ucsalApp').controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {
  $scope.dados = { matricula: '', senha: '' };
  $scope.erro = '';

  $scope.entrar = function () {
    if (!$scope.dados.matricula || !$scope.dados.senha) {
      $scope.erro = 'Preencha a matrícula e a senha.';
      return;
    }

    if (AuthService.login($scope.dados.matricula, $scope.dados.senha)) {
      $scope.erro = '';
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('app.noticias');
    } else {
      $scope.erro = 'Matrícula ou senha incorreta.';
    }
  };
});
