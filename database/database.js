

/*IMPORT DO SEQUELIZE*/
const Connection = require("mysql2/typings/mysql/lib/Connection");
const Sequelize = require ("sequelize");


/*
CRIAÇÃO DA INSTANCIA DE CONEXÃO COM O BANCO DADOS COM USO DO 
SEQULEIZE.

1 - NOME DO BANCO DE DADOS - STRING
2 - USUÁRIO DO BANCO DE DADOS  - STRING
3 - SENHA DO BANCO DE DADOS - STRING
4 - JSON QUE DETERMINA AS CONFIGURAÇÕES DE CONEXÃO
    4.1 - LOCAL ONDE O BANCO ESTÁ RODANDO (localhost)
    4.2 - DIALETO DO BANCO DE DADOS

*/
const connection = new Sequilize(

"apimundopartitura",
"root",
"",

{

    host:"localhost",
    dialect: 'mysql'
}


);

module.export = connection  






