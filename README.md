# 🔔 Notificações API

API REST para o módulo de notificações por e-mail de uma plataforma de gerenciamento de eventos.

## 📋 Sobre o Projeto

Este projeto faz parte da Situação de Aprendizagem do curso de Programação Back-End do SENAI.

O sistema permite:

* Gerenciar eventos
* Cadastrar participantes
* Criar e controlar inscrições

---

## 🚀 Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/notificacoes-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

4. Acesse:

* API: http://localhost:3000
* Documentação: http://localhost:3000/api-docs

---

## 📚 Rotas

### Eventos

* GET /eventos
* GET /eventos/:id
* POST /eventos
* PUT /eventos/:id
* DELETE /eventos/:id

### Participantes

* GET /participantes
* GET /participantes/:id
* POST /participantes
* PUT /participantes/:id
* DELETE /participantes/:id

### Inscrições

* POST /inscricoes
* GET /inscricoes
* GET /inscricoes/evento/:eventoId
* PATCH /inscricoes/:id/cancelar

---

## 🛠️ Tecnologias

* Node.js
* Express.js
* Swagger

---

## 📁 Estrutura

src/
├── models/
├── controllers/
├── routes/
├── swagger.js
├── app.js
└── server.js

---

## 👨‍💻 Autor

Wesley Eduardo de Souza
