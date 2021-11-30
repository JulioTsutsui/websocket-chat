const { body } = require('express-validator');

module.exports = (application) => {
    application.post('/chat', 
    body('apelido', 'O apelido é obrigatório').notEmpty(),
    body('apelido', 'O apelido precisa ter entre 3 a 15 caracteres').isLength({min: 3, max: 15}),
    (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    application.get('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}