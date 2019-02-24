module.exports = function Route(app){

  app.get('/', function(request, response) {
    response.render("index");
  });
  // post route for adding a data from a survey 
  app.post('/result', function(request, response) {
    const submittedInfo = {
      name: request.body.name,
      dojoLocation: request.body.dojoLocation,
      favoriteLanguage: request.body.favoriteLanguage,
      comment: request.body.comment
    };

    response.render("result", { userData: submittedInfo });
  });
};