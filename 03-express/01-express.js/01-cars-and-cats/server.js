var express = require("express");
var app = express();

//app.set('views', __dirname + '/views'); 
//app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
   response.sendFile(index.html);
});

app.get('/cars.html', function(request, response) {
  response.sendFile(cars.html);
});

app.get('/cats.html', function(request, response) {
  response.sendFile(cats.html);
});

app.get('/forms.html', function(request, response) {
  response.sendFile(forms.html);
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
