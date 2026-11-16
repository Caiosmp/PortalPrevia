angular.module('ucsalApp').factory('AlunoService', function () {
  var cadastros = [
    {
      matricula: '20261001',
      nome: 'Ana Beatriz Souza',
      curso: 'Engenharia de Software',
      email: 'ana.souza@email.com',
      telefone: '(71) 99876-5432',
      endereco: {
        cep: '41740-090',
        rua: 'Rua das Gaivotas, 120',
        bairro: 'Pituaçu',
        cidade: 'Salvador'
      }
    },
    {
      matricula: '20261002',
      nome: 'João Pedro Lima',
      curso: 'Engenharia de Software',
      email: 'joao.lima@email.com',
      telefone: '(71) 98123-4567',
      endereco: {
        cep: '40210-020',
        rua: 'Rua da Paz, 45',
        bairro: 'Federação',
        cidade: 'Salvador'
      }
    }
  ];

  function encontrar(matricula) {
    for (var i = 0; i < cadastros.length; i++) {
      if (cadastros[i].matricula === matricula) {
        return cadastros[i];
      }
    }
    return null;
  }

  return {
    buscarPorMatricula: function (matricula) {
      return angular.copy(encontrar(matricula));
    },

    atualizar: function (matricula, dados) {
      var cadastro = encontrar(matricula);

      cadastro.email = dados.email;
      cadastro.telefone = dados.telefone;
      cadastro.endereco = angular.copy(dados.endereco);
    }
  };
});
