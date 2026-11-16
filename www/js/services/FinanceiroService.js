angular.module('ucsalApp').factory('FinanceiroService', function () {
  var mensalidadesPorSemestre = {
    '2025.2': [
      { mes: 'Julho/2025', vencimento: '2025-07-10', valor: 1189.90, status: 'Paga' },
      { mes: 'Agosto/2025', vencimento: '2025-08-10', valor: 1189.90, status: 'Paga' },
      { mes: 'Setembro/2025', vencimento: '2025-09-10', valor: 1189.90, status: 'Paga' },
      { mes: 'Outubro/2025', vencimento: '2025-10-10', valor: 1189.90, status: 'Paga' },
      { mes: 'Novembro/2025', vencimento: '2025-11-10', valor: 1189.90, status: 'Paga' },
      { mes: 'Dezembro/2025', vencimento: '2025-12-10', valor: 1189.90, status: 'Paga' }
    ],
    '2026.1': [
      { mes: 'Janeiro/2026', vencimento: '2026-01-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Fevereiro/2026', vencimento: '2026-02-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Março/2026', vencimento: '2026-03-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Abril/2026', vencimento: '2026-04-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Maio/2026', vencimento: '2026-05-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Junho/2026', vencimento: '2026-06-10', valor: 1249.90, status: 'Paga' }
    ],
    '2026.2': [
      { mes: 'Julho/2026', vencimento: '2026-07-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Agosto/2026', vencimento: '2026-08-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Setembro/2026', vencimento: '2026-09-10', valor: 1249.90, status: 'Paga' },
      { mes: 'Outubro/2026', vencimento: '2026-10-10', valor: 1249.90, status: 'Paga' },
      {
        mes: 'Novembro/2026',
        vencimento: '2026-11-20',
        valor: 1249.90,
        status: 'A Pagar',
        codigoBarras: '23790.12345 60000.123456 78901.234567 8 12340000124990'
      },
      {
        mes: 'Dezembro/2026',
        vencimento: '2026-12-10',
        valor: 1249.90,
        status: 'A Pagar',
        codigoBarras: '23790.12345 60000.123456 78901.234568 5 12560000124990'
      }
    ]
  };

  return {
    listarSemestres: function () {
      return Object.keys(mensalidadesPorSemestre);
    },

    listarMensalidades: function (semestre) {
      return mensalidadesPorSemestre[semestre] || [];
    }
  };
});
