const express = require('express');

const router = express.Router();

router.get('/listarCategoria', (req, res)=>{

    res.send('----TESTE DE ROTA LISTAGEM DE CATEGORIAS SEM CRITÉRIOS----');

});

router.get('/listarCategoria/:id',(req, res)=>{

    let {id} = req.params;

    res.send('----TESTE DE ROTA LISTAGEM DE CATEGORIAS COM CRITÉRIOS----');

});

router.post('/inserirCategoria', (req, res)=>{

    res.send('----TESTE DE ROTA CADASTRO DE CATEGORIAS COM CRITÉRIOS----');

});

router.put('/alterarCategoria', (req, res)=>{

    res.send('----TESTE DE ROTA ALTERAÇÃO DE CATEGORIAS COM CRITÉRIOS----');

});

router.delete('/excluirCategoria/:id', (req, res)=>{

    res.send('----TESTE DE ROTA EXCLUSÃO DE CATEGORIAS COM CRITÉRIOS----');

});

module.exports = router;