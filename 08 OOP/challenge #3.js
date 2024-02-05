/*Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log("Accelerate:", this.make + " going at " + this.speed + "km/h");
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log("Brake:", this.make + " going at " + this.speed + "km/h");
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1);
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();
console.log("-----------------------------------");
console.log(car2);
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();

// 1
const EV = function (make, speed, charge) {
  Car.apply(this, [make, speed]);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype); // link prototype
EV.prototype.constructor = EV; // Default changed from Car

// 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3
EV.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    "Accelerate:",
    this.make +
      " going at " +
      this.speed +
      "km/h," +
      " with a charge of " +
      this.charge
  );
};

//4
const electCar = new EV("Tesla", 120, 23);
console.log("-----------------------------------");
console.log(electCar);
electCar.accelerate();
electCar.brake();
electCar.chargeBattery(90);
electCar.accelerate();
electCar.brake();
