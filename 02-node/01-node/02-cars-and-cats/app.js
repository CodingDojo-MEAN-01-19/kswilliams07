const fs = require('fs'),
    http = require('http');

const server = http.createServer(function server(request, response){
  const splitURL = request.url.split('/'),
        fileType = splitURL[1],
        file = splitURL[2];

  switch (fileType) {
    case "styles":
      serveCSS(file, response);
      break;
    case "images":
      serveJPG(file, response);
      break;
    default:
      switch(fileType){
        case "cars":
          if(file === "new"){
            serveHTML("cars_form.html", response);
          }
          else{
            serveHTML("cars.html", response);
          }
          break;
        case "cats":
          serveHTML("cats.html", response);
          break;
        default:
          error404(response);
      }
  }
});

function serveHTML(filename, response){
  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
    if(error){ return error404(response)}

    response.writeHead(200, {'Content-type': 'text/html'});
    response.write(contents);
    response.end();
  });
}

function serveCSS(filename, response){
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
    if(error){ return error404(response)}

    response.writeHead(200, {'Content-type': 'text/css'});
    response.write(contents);
    response.end();
  });
}

function serveJPG(filename, response){
  fs.readFile(`images/${filename}`, function(error, contents){
    if(error){ return error404(response)}

    response.writeHead(200, {'Content-type': 'image/jpg'});
    response.write(contents);
    response.end();
  });
}

function error404(response){
  response.writeHead(404);
  response.end('File not found!');
}

server.listen(7077);
console.log("Running on port 7077");