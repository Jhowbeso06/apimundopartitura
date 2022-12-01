

const express = require("express");

const Instrumento = require("../model/Instrumento");


const router = express.Router();

const modelInstrumento = require("../model/Instrumento");

router.get("/listarInstrumento", (req, res) => {

  modelInstrumento 
    .findAll()
    .then((Instrumento) => {
      return res.status(200).json(Instrumento);
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao selecionar os dados de Instrumento",
        erroBancoDados: erro,
      });
    });
});



router.get("/listarInstrumento/:id", (req, res) => {
    let {id} = req.params;

    Instrumento
      .findByPk(id)
      .then((instrumento) => {
        return res.status(200).json(instrumento);
      })
      .catch((erro) => {
        return res.status(400).json({
          erroStatus: true,
          erroMessagem: "Houve um erro ao selecionar os dados de categoria",
          erroBancoDados: erro,
        });
      });
  });



router.post('/inserirInstrumento', (req, res)=>{
      
    let {nome_instrumento} = req.body;
    
    modelInstrumento.create(
        {nome_instrumento}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Instrumento inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a Instrumento',
                        erroBancoDados: erro
                    });
        }
    );

});


router.put('/alterarInstrumento', (req, res)=>{

    let {id, nome_instrumento} = req.body;




    modelInstrumento.update(
        {nome_instrumento},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Instrumento alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a Instrumento',
                        erroBancoDados: erro
                    });
        }
    );

});



router.delete('/excluirInstrumento/:id', (req, res) => {
    
    let { id } = req.params;
    modelInstrumento.destroy(
        { where: { id } }
    ).then(() => {

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Instrumento excluida com sucesso!'
        });

    }).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao excluir a Instrumento',
                erroBancoDados: erro
            });
        }
    );

});

module.exports = router;
