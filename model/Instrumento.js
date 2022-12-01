const Sequelize = require('sequelize');


const connection = require('../database/database');


const Instrumento = connection.define(
    'tbl_instrumento',
    {
        nome_instrumento:{
            type: Sequelize.STRING(200),
            allowNull: false
        }
    }
);

 //Instrumento.sync({force:true});

module.exports = Instrumento;