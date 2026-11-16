angular.module('ucsalApp').factory('NoticiasService', function () {
  var noticias = [
    {
      id: 1,
      titulo: 'Rematrícula 2027.1: prazo vai até 12 de dezembro',
      data: '2026-11-10',
      categoria: 'Notícia',
      imagem: 'img/rematricula.svg',
      resumo: 'Alunos veteranos já podem confirmar a rematrícula pelo portal.',
      conteudo: 'A rematrícula para o semestre 2027.1 está aberta para todos os cursos. O aluno precisa estar com as mensalidades em dia e escolher as disciplinas pelo portal até 12 de dezembro. Depois desse prazo, a rematrícula só poderá ser feita presencialmente na secretaria do campus.'
    },
    {
      id: 2,
      titulo: 'Edital de Iniciação Científica 2027',
      data: '2026-11-05',
      categoria: 'Notícia',
      imagem: 'img/pesquisa.svg',
      resumo: 'Inscrições abertas para bolsas de pesquisa em todas as escolas.',
      conteudo: 'A Pró-Reitoria de Pesquisa publicou o edital de Iniciação Científica 2027. Podem participar alunos a partir do 2º semestre, com projeto orientado por um professor da UCSal. As inscrições vão até 30 de novembro e o resultado sai em janeiro.'
    },
    {
      id: 3,
      titulo: 'SEMOC 2026: Semana de Mobilização Científica',
      data: '2026-11-24',
      categoria: 'Evento',
      imagem: 'img/semoc.svg',
      resumo: 'Palestras, oficinas e apresentação de trabalhos no campus Pituaçu.',
      conteudo: 'A SEMOC reúne alunos, professores e convidados para uma semana de palestras, oficinas e apresentação de trabalhos acadêmicos. A programação acontece no campus Pituaçu e as horas contam como atividade complementar.'
    },
    {
      id: 4,
      titulo: 'Maratona de Programação da Escola de Tecnologias',
      data: '2026-11-29',
      categoria: 'Evento',
      imagem: 'img/maratona.svg',
      resumo: 'Equipes de até 3 alunos resolvem desafios de lógica em 5 horas.',
      conteudo: 'A Escola de Tecnologias promove a sua maratona de programação. As equipes têm até 3 integrantes e 5 horas para resolver o maior número de problemas. As melhores equipes vão representar a UCSal na etapa regional.'
    },
    {
      id: 5,
      titulo: 'Projeto de extensão leva inclusão digital ao bairro',
      data: '2026-12-03',
      categoria: 'Evento',
      imagem: 'img/extensao.svg',
      resumo: 'Alunos voluntários ensinam informática básica para a comunidade.',
      conteudo: 'O projeto de extensão Inclusão Digital está com inscrições abertas para alunos voluntários. As aulas de informática básica acontecem aos sábados no campus Federação e são abertas para a comunidade do entorno.'
    },
    {
      id: 6,
      titulo: 'Biblioteca com horário estendido na semana de provas',
      data: '2026-11-12',
      categoria: 'Notícia',
      imagem: 'img/biblioteca.svg',
      resumo: 'As bibliotecas dos dois campi ficam abertas até 22h.',
      conteudo: 'Durante a semana de avaliações finais, as bibliotecas dos campi Pituaçu e Federação vão funcionar das 7h às 22h, de segunda a sábado. As salas de estudo em grupo podem ser reservadas no balcão de atendimento.'
    }
  ];

  return {
    listar: function () {
      return noticias;
    },

    buscarPorId: function (id) {
      for (var i = 0; i < noticias.length; i++) {
        if (noticias[i].id === Number(id)) {
          return noticias[i];
        }
      }
      return null;
    }
  };
});
