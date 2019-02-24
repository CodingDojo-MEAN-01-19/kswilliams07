$(document).ready(function(){
  $('button').click(function(){
    $.get("https://api.github.com/users/kswilliams07", displayName)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function displayName(data) {
      $('#Name').append(data.name);
      //document.getElementById("Name").innerHTML = data.name;
    } 
  })
})