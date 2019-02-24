$(document).ready(() => {
  const socket = io.connect();
  $('#count').click(function() {
    socket.emit('buttonClicked');
  });
  socket.on('numberUpdated', function(number) {
    $('#number').text(number);
  });
  $('#reset').click(function() {
    socket.emit('reset');
  });
});
