/* Configurações do servidor */
var app = require('./config/server');
var websocket = require('socket.io');
/* Porta de escuta do servidor */

var serverPort = app.listen('80',() => {
   console.log("Servidor ON!");
});

var io = websocket.listen(serverPort);

app.set('io',io);

io.on('connection',(socket)=> {
   console.log('Usuário conectou');
   socket.on('disconnect',()=>{
      console.log("Usuário desconectou");
   });
   socket.on('msgParaServidor', function(data){

      /* Dialogo */
      socket.emit('msgParaCliente', {apelido:data.apelido,msg: data.msg});
      socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, msg: data.msg });

      /* Participantes */
      if (parseInt(data.participantes) == 0) {
         socket.emit('participantesCliente', { apelido: data.apelido });
         socket.broadcast.emit('participantesCliente', { apelido: data.apelido });   
      }
   });
});
