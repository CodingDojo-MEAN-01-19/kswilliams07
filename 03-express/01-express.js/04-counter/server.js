const session = require('express-session');
const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
var app = express();

const sessionConfig = {
  saveUninitialized: true,
  resave: false,
  name: 'session',
  secret: 'thisisSuperSekret'
};

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session(sessionConfig));

app.get('/', (request, response) => {
 response.render("index", { counter: addOneToCounter(request)});
});

app.post('/by-two', (request, response) => {
  addOneToCounter(request);

  response.redirect('/');
})

app.post('/reset', (request, response) => {
  request.session.destroy();

  response.redirect('/');
})

function addOneToCounter(request) {
  console.log(request.session.counter);
  return request.session.counter = request.session.counter ? request.session.counter + 1 : 1;
}

app.listen(port, () => {
 console.log(`listening on port ${ port }`);
});