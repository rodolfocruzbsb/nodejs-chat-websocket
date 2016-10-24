var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
	res.sendFile(__dirname +'/app/views/index.html');
});
 
// Quando tivermos uma chamada para o nosso socket iremos logar no terminal uma mensagem de novo usuário
io.on('connection', function(socket){


	console.log('Usuário conectado.');

  	socket.on('disconnect', function(){

    	console.log('O usuário saiu da aplicação.');
  	});

	socket.on('nosso chat websocket', function(msg){		
    	io.emit('nosso chat websocket', msg);
  	});

});


//Variável para armazenar a porta que o servidor vai escutar
var port = 3000;

http.listen(port, function(){
	console.log('Servidor rodando na porta '+port);
});
