class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }

  sayName(){
    console.log(`My ninja name is ${this.name}`);
  }

  drinkSake(){
    console.log("Kanpai!!!");
    this.health += 10;
    return this;
  }
}
class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(){
    super.drinkSake();
    console.log("The determination to win is the better part of winning." );
  }

  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
  }
}

//Part 1 - Tests
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
console.log("--------");

//Part 2 - Tests
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();