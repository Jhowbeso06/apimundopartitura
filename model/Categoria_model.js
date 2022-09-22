

/* IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');



/* IMPORT DA CONEXÃO */
const connection = require ("../database")

/*
CRIAÇÃO DO MODELO DA TABELA CATEGORIA
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA - STRING
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/


const Categoria = connection.define(
    "tbl_categoria",
    {
        cod_categoria: {
            type:Sequelize.INT(),
            allowNull:true
            }
    }

);

// Categoria.sync({force:true});

module.exports = Categoria;
