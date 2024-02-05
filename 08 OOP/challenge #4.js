/**Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK �
 */

// 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.make + " going at " + this.speed + "km/h");
  }

  brake() {
    this.speed -= 5;
    console.log(this.make + " going at " + this.speed + "km/h");
  }

  get speedUS() {
    console.log(this.make + " going at " + this.speed / 1.6 + "mi/h");
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// 1
class EVCl extends CarCl {
  // 2
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#charge -= 1;
    console.log(
      "Accelerate:",
      this.make +
        " going at " +
        this.speed +
        "km/h," +
        " with a charge of " +
        this.#charge
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log("Brake:", this.make + " now going at " + this.speed + "km/h");
    return this;
  }
}

const electCar = new EVCl("Rivian", 120, 23);

// 3
electCar
  .accelerate()
  .chargeBattery(80)
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .accelerate()
  .brake()
  .accelerate()
  .brake()
  .accelerate();
