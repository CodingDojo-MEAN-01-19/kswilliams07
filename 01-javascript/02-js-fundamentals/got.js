$(document).ready(function(){
  const house_map = {
    "stark" : 362,
    "targaryen" : 378,
    "lannister" : 229,
    "baratheon" : 17
  }
  $("img").click(function(){
    let house = house_map[this.id];
    let api_url = "https://anapioficeandfire.com/api/houses/" + house;
    $.get(api_url, displayHouseInfo)
    function displayHouseInfo(data) {
      let house_info = "";
      house_info = house_info + "House Name: " + data.name + "<br>";
      house_info = house_info + "Region: " + data.region + "<br>";
      house_info = house_info + "Coat of Arms: " + data.coatOfArms + "<br>";
      house_info = house_info + "Slogan: " + data.words + "<br>";
      house_info = house_info + "Titles: " + data.titles + "<br>";
      house_info = house_info + "Seats: " + data.seats + "<br>";
      document.getElementById("house_info").innerHTML = house_info;
    }
  });
});