// IMPORTAÇÃO DO PACOTE EXPRESS: *//
const express = require('express');

/* IMPORTAÇÃO DA CONTROLLER DE CATEGORIA DE LIVROS */
const categoriaController = require('./controller/CategoriaController');

/* CRIAÇÃO DE UMA INSTANCIA EXECUTAVEL DO EXPRESS */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* ROTAS DE CATEGORIA DE LIVROS: */
// console.log('A REQUISIÇÃO PASSOU PELA INDEX');
app.use('/', categoriaController);



/* 
CRIAÇÃO DO SERVIDOR DE REQUISIÇÕES HTTP DA APLICAÇÃO 
PARAMETROS DO LISTEN
1 - PORTA LÓGICA QUE RECEBE AS REQUISIÇÕES
2 - CALLBACK - ARROW ANONIMA (OPCIONAL)
*/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});