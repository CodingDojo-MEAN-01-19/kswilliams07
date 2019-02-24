module.exports = function Route(app, server){

  const io = require('socket.io').listen(server);

  app.get('/', function(request, response) {
    response.render("index");
  });

  io.sockets.on('connection', function(socket){
    socket.on('posting_form', function(data){
      var random_number = Math.floor(Math.random()*1000)+1;
      socket.emit('updated_message', {response: data});
      socket.emit('random_number',{response: random_number});
    });
  });
  // post route for adding a data from a survey 
  // app.post('/result', function(request, response) {
  //   const submittedInfo = {
  //     name: request.body.name,
  //     dojoLocation: request.body.dojoLocation,
  //     favoriteLanguage: request.body.favoriteLanguage,
  //     comment: request.body.comment
  //   };

  //   response.render("result", { userData: submittedInfo });
  // });
};