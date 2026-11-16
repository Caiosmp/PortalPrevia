# Portal do Aluno UCSal

Protótipo (MVP front-end) de aplicativo para alunos da UCSal, feito com **Ionic Framework 1** e **AngularJS**.
Os dados são mockados nos Services do AngularJS (sem banco de dados e sem back-end).

## Funcionalidades

- **Login** com matrícula e senha (mock no `AuthService`)
- **Mural** de notícias e eventos com filtro por categoria e tela de detalhes
- **Meus dados**: edição de e-mail, telefone e endereço (salvos no `AlunoService`)
- **Financeiro**: mensalidades por semestre, status Paga / A Pagar e cópia do código de barras

## Como rodar

O Ionic e o AngularJS são carregados por CDN, então não precisa instalar nada.
Basta servir a pasta `www` por HTTP:

```bash
python3 -m http.server 8100 --directory www
```

Depois abra `http://localhost:8100` (no Codespaces, abra a porta 8100 na aba "Portas").

## Usuários de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | abc123 |

## Estrutura

```
www/
├── css/style.css
├── img/
├── js/
│   ├── app.js
│   ├── controllers/  (LoginCtrl, MenuCtrl, NoticiasCtrl, PerfilCtrl, FinanceiroCtrl)
│   └── services/     (AuthService, NoticiasService, AlunoService, FinanceiroService)
├── templates/        (login, menu, noticias, noticia-detalhe, perfil, financeiro)
└── index.html
```
