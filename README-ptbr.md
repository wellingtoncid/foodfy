
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/wellingtoncid/foodfy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wellingtoncid/foodfy">

  <a href="https://www.twitter.com/wellingtoncid/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fwellingtoncid%2Ffoodfy">
  </a>
  
  <a href="https://github.com/wellingtoncid/README/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wellingtoncid/foodfy">
  </a>
    
   <img alt="License" src="https://img.shields.io/github/license/wellingtoncid/foodfy">
   <a href="https://github.com/wellingtoncid/README-proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/wellingtoncid/foodfy">
  </a>

  <a href="https://linkedin.com/in/wellingtoncid">
    <img alt="Feito por Wellington Cid" src="https://img.shields.io/badge/feito%20por-Wellington_Cid-%237519C1">
  </a>    
 
</p>
<h1 align="center">
    <img alt="Foodfy" title="#foodfy" src="./assets/mockup.png" />
</h1>

<h4 align="center"> 
	🚧  Concluído: Desafio final do LauchBase Bootcamp 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a> • 
 <a href="#english-version">English version</a>
</p>


## 💻 Sobre o projeto

Foodfy - é uma sistema para gerenciamento de receitas, uma forma de conectar chefs, receitas e amantes de uma boa refeição feitas de forma artenasal, com as prórias mãos na massa.

Projeto desenvolvido durante o Bootcamp **LaunchBase** da [Rocketseat](https://blog.rocketseat.com.br/).
O LaunchBase é um treinamento no formato de bootcamp online que tem duração de 8 semanas com muito conteúdo prático, desafios e hacks para evoluir o desenvolvimento web para o próximo nível.

---

## ⚙️ Funcionalidades

- [x] O administrador tem acesso total a plataforma, onde pode:
  - [x] criar, visualizar, editar ou apagar chefs, usuários e receitas
  - [x] cadastrar novos administradores
  - [x] ao cadastrar chefs e usuários, adicionar:
    - Nome e email do chef ou usuário
    - Avatar
    - Enviar senha criptografada através do email cadastrado

- [x] Os usuários cadastrados tem acesso exclusivo a aplicação, onde podem:
  - [x] navegar pelo site para visualizar as receitas e chefs cadastradas
  - [x] cadastrar receitas e atribuí-las aos seus respectivos chefs
  - [x] cadastrar uma nova senha de acesso, caso tenha esquecido 
  - [x] ao cadastrar uma nova receita, o usuário pode
    - Adicionar até 5 imagens da receita no formato png, jpg, ou jpeg
    - Escolher um chef
    - Título da receita
    - Descrição completa dos ingredientes
    - Descrição completa passo a passo do modo de preparo
    - Descrição de informações adicionais sobre a receita

- [x] Qualquer usuário amante da culinária pode:
  - [x] navegar pelo site para visualizar as receitas cadastradas
  - [x] visualizar os detalhes das receitas e seus respectivos chefs
  - [x] ocultar ou mostrar detalhes, tais como, ingredientes, modo de preparo e informações adicionais
  

---

## 🎨 Layout

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">

  <img alt="Foodfy" title="#Foodfy" src="./assets/foodfy.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-3-back-end-details.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-4-1-admin-edit.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-4-2-admin-list.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-5-1-search.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-5-2-search-chef.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-7-1-recipe-detail.png" width="200px">

  <img alt="Foodfy" title="#Foodfy" src="./assets/web-7-2-recipe-edit.png" width="200px">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/), [Postbird](https://www.electronjs.org/apps/postbird). 
Além disto é bom ter um editor para trabalhar com o código, como por exemplo o [VSCode](https://code.visualstudio.com/).


#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/wellingtoncid/foodfy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd foodfy

# Instale as dependências
$ npm install

#Configure o banco de dados
psql -U <username> -c "CREATE DATABASE foodfydb"
psql -U <username> -d foodfy -f foodfydb.sql

Você pode importar manualmente o foodfydb.sql para o Postbird, lembre-se de criar um novo 
banco de dados com o nome foodfydb.
- Importante!
Você deve alterar o db.js, localizado em src/config para configurar a conexão com o PostgreSQL.
Também deve alterar o mailer.js, em src/lib para configurar a conexão com o Mailtrap.

# Preencha a aplicação com dados utilizando o Faker.js
node seed.js

-Atenção: 
A senha de usuário Faker é "1234", é preciso verificar as configurações de cada usuário no Postbird.

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/wellingtoncid/foodfy#server-nodejs)**Website/Server** ([Javascript](https://javascript.com)) ([NodeJS](https://nodejs.org/en/))
-   **[Express](https://expressjs.com/)**
-   **[PostgreSQL](https://postgresql.org)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[NodeMailer](https://nodemailer.com)**   
-   **[Faker](https://github.com/marak/Faker.js/)**

> Vide arquivo  [package.json](https://github.com/wellingtoncid/foodfy/blob/master/package.json)

#### [](https://github.com/wellingtoncid/launchbase#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Animação:  **[Lottie](https://github.com/airbnb/lottie-web)**
-   Fontes:  **[Roboto](https://fonts.google.com/specimen/Roboto)**, **[Material icons](https://material.io)** 


---

## 👨‍💻 Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://linkedin.com/in/wellingtoncid"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/18754691?s=460&u=09c04df1369e272974644e2da576101759417f77&v=4" width="100px;" alt=""/><br /><sub><b>Wellington Cid</b></sub></a><br /><a href="https://linkedin.com/in/wellingtoncid" title="Rocketseat">👨‍🚀</a></td>
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

<a href="https://linkedin.com/in/wellingtoncid/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/18754691?s=460&u=09c04df1369e272974644e2da576101759417f77&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wellington Cid</b></sub></a> <a href="https://linkedin.com/in/wellingtoncid/" title="WellingtonCid">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@wellingtoncid-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/wellingtoncid)](https://twitter.com/wellingtoncid) [![Linkedin Badge](https://img.shields.io/badge/-WellingtonCid-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellingtoncid/)](https://www.linkedin.com/in/wellingtoncid/) 
[![Gmail Badge](https://img.shields.io/badge/-cid.wellington@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cid.wellington@gmail.com)](mailto:cid.wellington@gmail.com)

---

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

Feito com ❤️ por Wellington Cid 👋🏽 [Entre em contato!](https://www.linkedin.com/in/wellingtoncid/)

---

##  English Version

[English 🇺🇸](./README.md)  |  [Português 🇧🇷](./README-ptbr.md) 
