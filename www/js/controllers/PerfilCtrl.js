angular.module('ucsalApp').controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {
  var matricula = AuthService.getAlunoLogado().matricula;

  $scope.aluno = AlunoService.buscarPorMatricula(matricula);
  $scope.mensagem = { erro: '', sucesso: '' };

  $scope.salvar = function () {
    $scope.mensagem.sucesso = '';

    if (!$scope.aluno.email) {
      $scope.mensagem.erro = 'Informe um e-mail válido.';
      return;
    }

    $scope.mensagem.erro = '';
    AlunoService.atualizar(matricula, $scope.aluno);
    $scope.mensagem.sucesso = 'Alterações salvas.';

    $ionicPopup.alert({
      title: 'Cadastro atualizado',
      template: 'Seus dados de contato foram salvos com sucesso.',
      okText: 'OK',
      okType: 'button-ucsal'
    });
  };
});
