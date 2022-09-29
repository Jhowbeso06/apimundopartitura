const express = require('express');

const router = express.Router();

const modelCategoria = require('../model/Categoria');



router.get('/listarCategoria', (req, res)=>{



    modelCategoria.findAll()
    .then(
        (categorias)=>{
            return res.status(200).json(categorias);
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                erroBancoDados: erro
            });
        }
    );

});


router.post('/inserirCategoria', (req, res)=>{

    res.send('TESTE DE ROTA CADASTRO DE CATEGORIAS DE INSTRUMENTOS !!  ');


    modelCategoria.findAll()
    .then(
        (categorias)=>{
            return res.status(200).json(categorias);
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                erroBancoDados: erro
            });
        }
    );


});

router.put('/alterarCategoria', (req, res)=>{

    res.send('----TESTE DE ROTA ALTERAÇÃO DE CATEGORIAS DE INSTRUMENTOS ');


    modelCategoria.findAll()
    .then(
        (categorias)=>{
            return res.status(200).json(categorias);
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                erroBancoDados: erro
            });
        }
    );



});

router.delete('/excluirCategoria/:id', (req, res)=>{

    res.send('----TESTE DE ROTA EXCLUSÃO DE CATEGORIAS COM CRITÉRIOS----');



    modelCategoria.findAll()
    .then(
        (categorias)=>{
            return res.status(200).json(categorias);
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                erroBancoDados: erro
            });
        }
    );



});

module.exports = router;