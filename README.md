O projeto consiste em um sistema de biblioteca desenvolvido utilizando React com JavaScript no frontend e Express no backend.
O sistema permite cadastrar editoras e livros, relacionando as duas tabelas por meio de um relacionamento 1:N, no qual uma editora pode possuir vários livros.
O Sequelize é responsável por fazer a comunicação entre a aplicação e o banco de dados SQLite3, armazenando e consultando as informações. Os Controllers controlam as operações, enquanto as Routes definem os caminhos das requisições.
O React é responsável por exibir as informações e permitir que o usuário realize os cadastros. Já o Express-Handlebars é utilizado para renderizar páginas tradicionais do servidor.
