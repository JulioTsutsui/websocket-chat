const { validationResult } = require('express-validator');

module.exports.iniciaChat = (application, req, res) =>{
    var result = validationResult(req);
    var errors = result.errors
    
    if(errors.length > 0){
        res.render('index',{validacao: errors});
    }
    
    var dados = req.body;
    application.get('io').emit('msgParaCliente',{apelido: dados.apelido, msg:" entrou na sala!"});

    res.render('chat',{dados:dados.apelido});
}