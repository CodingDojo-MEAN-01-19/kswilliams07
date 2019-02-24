const express = require('express');
const path = require('path');
const port = process.env.PORT || 6789;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

app.get('/', function(request, response) {
  response.render('index');
});

let count = 0;
io.on('connection', socket => {
  console.log("incoming socket connection");

  socket.on('buttonClicked', function() {
    numberUpdated(++count);
  });

  socket.on('reset', function() {
    numberUpdated(count = 0);
  });

  socket.emit('numberUpdated', count);
});

function numberUpdated(number) {
  io.emit('numberUpdated', number);
}