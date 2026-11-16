angular.module('ucsalApp').factory('AuthService', function () {
  var alunos = [
    { matricula: '20261001', senha: '123456', nome: 'Ana Beatriz Souza' },
    { matricula: '20261002', senha: 'abc123', nome: 'João Pedro Lima' }
  ];

  var alunoLogado = null;

  return {
    login: function (matricula, senha) {
      alunoLogado = null;

      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula && alunos[i].senha === senha) {
          alunoLogado = { matricula: alunos[i].matricula, nome: alunos[i].nome };
        }
      }

      return alunoLogado !== null;
    },

    getAlunoLogado: function () {
      return alunoLogado;
    },

    logout: function () {
      alunoLogado = null;
    }
  };
});
