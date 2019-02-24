function Ninja(name) {
  this.name = name;
  this.health = 100;
  let speed = 3;
  let strength = 3;

  this.showStats = function() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
  }

  this.kick = function(ninja){
    if( ninja instanceof Ninja ){
      const damage = 15*strength;
      ninja.health -= damage;
      console.log(ninja.name + " was kicked by " + this.name + " and lost "
      + damage + " health!");
      ninja.showStats();
      return this;
    }
    else{
      console.log("Error - not an instance of Ninja.");      
    }
  }
}

  Ninja.prototype.sayName = function(){
    console.log("My name is " + this.name);
    return this;
  }

  Ninja.prototype.drinkSake = function(){
    console.log("Kanpai!!!");
    this.health += 10;
    return this;
  }

  Ninja.prototype.punch = function(target){
    if(target instanceof Ninja){
      target.health -= 5;
      console.log(target.name + " was punched by " + this.name + " and lost 5 Health!");
      target.showStats();
      return this;      
    }
    else{
      console.log("Error - not an instance of Ninja.");
    }
  }


var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();
console.log("--------");
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
