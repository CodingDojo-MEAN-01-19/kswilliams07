class Bike {
  price: number;
  max_speed: number;
  miles: number;

  constructor(price: number, max_speed: number) { 
      this.price = price;
      this.max_speed = max_speed;
      this.miles = 0
  }
  displayInfo = function () {
      console.log(this.price, this.max_speed, this.miles)
  }

  displayInfoFatArrow = () => console.log(this.price, this.max_speed, this.miles)

  ride = function () {
      this.miles += 10;
      console.log("Riding");
      return this;
  }

  reverse = function () {
      this.miles -= 5;
      console.log('Reversing')
      if (this.miles < 0) {
          this.miles = 0;
      }
      return this;
  }

}
const bike1 = new Bike(100, 30);
bike1.ride().ride().ride().reverse().displayInfo();

const bike2 = new Bike(1000, 100);
bike2.ride().ride().reverse().reverse().displayInfo();

const bike3 = new Bike(1000, 100);
bike2.reverse().reverse().reverse().displayInfo();

bike3.displayInfoFatArrow();