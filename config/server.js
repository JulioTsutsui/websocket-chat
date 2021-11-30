/* Importar o módulo Express */
var express = require('express');

/* Importando o módulo Consign */
var consign = require("consign");

/* Importando o módulo Body Parser */
var bodyParser = require("body-parser");

var app = express();

/* Setando a view engine e o diretório de views no express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurando o middleware express.static da pasta public */
app.use(express.static('./app/public'));

/* Configurando o middleware para a aquisição de dados enviados por formulário */
app.use(bodyParser.urlencoded({extended:true}));

/* Autoload das rotas */
consign()
    .include('./app/routes')
    .then('./app/controllers')
    .into(app);

module.exports = app;