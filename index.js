// Concept of Object Oriented Programming

// Define a class e.g Vehicle

class Vehicle{
  constructor(type, make, color, model){
    this.make = make;
    this.color = color;
    this.model = model;
    this.type = type;
  }

  // Encapsulation
  toString(){
    return `I have a ${this.type} of make ${this.make} and model ${this.model} with color ${this.color}`
  }

  print(){
    console.log(this.toString());
  }
}

// Inheritance
// Car inherits from class Vehicle
class Car extends Vehicle{
  constructor(make, color, model){
    super(0, make, color, model);
  }
  
  paint () {
    console.log(`I painted my car ${this.color}`)
  }

  print () { 
    console.log(`My car is a ${this.make} ${this.model} with color ${this.color} `);
  }
}

// Motocycle inherits from Vehicle
class Motorcycle extends Vehicle{
  constructor(make, capacity, model){
    super(0, make, 0, model);
    this.capacity = capacity;
  }

  print () {
    console.log(`My friend bought a ${this.make} ${this.model} motorcycle with ${this.capacity} engine capacity`);
  }
}

// Make car from Vehicle
let car1 = new Vehicle("Car", "BMW", "grey", "5 Series")
car1.print();

let car2 = new Car("Mercedes", "blue", "c330");
car2.paint();

let motorcycle = new Motorcycle("Bajaj", "450cc", "220BJ");
motorcycle.print();
