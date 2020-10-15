

# Post api
Api responsável por postagens.

### Instalação
Estou usando o gerenciador de pacote yarn, caso utilize o npm, altere os comandos para os do npm.
```sh
$ git clone https://github.com/andersonribeirodemoraes/post-api.git
$ cd post-api
$ yarn
```
### Banco de Dados
Estou usando o [knex](http://knexjs.org/) para manipular o banco de dados mysql.

#### Migrations
Para criar as tabelas de users e posts.
Para rodar é utilizado o knex, mas criei uma configuração no package.json, para facilitar o uso.

#### Rodando as migrations
```sh
$ yarn knex:migrate //Roda as últimas migrations
$ yarn knex:migrate:rollback //Faz rollback nas migrations
```

#### Seeds
Preparei uma carga inicial de users e posts.

#### Rodando os Seeds
```sh
$ yarn seed:run
```

#### Rodando o projeto
```sh
$ yarn dev:server
```

#### Usando Online
Fiz o deploy da api no [Heroku](https://www.heroku.com/)

Requests:

```sh

POST - http://anderson-post-api.herokuapp.com/login

{
	"email": "teste@gmail.com",
	"password": "123456"
}

POST - http://anderson-post-api.herokuapp.com/user

{
	"email": "teste@gmail.com",
	"password": "123456"
}

POST - http://anderson-post-api.herokuapp.com/post

{
	"title": "Título",
	"description": "Descrição",
	"url": "Url"
}

GET - http://anderson-post-api.herokuapp.com/post

Retorno:

[
  {
    "id": 1,
    "title": "Node",
    "description": "Imagem Node",
    "url": "https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js-1024x538.png"
  },
  {
    "id": 2,
    "title": "Express",
    "description": "Imagem Express",
    "url": "https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png"
  },
  {
    "id": 3,
    "title": "Typescript",
    "description": "Imagem Typescript",
    "url": "https://www.freecodecamp.org/news/content/images/2020/02/typescript.png"
  }
]
```
