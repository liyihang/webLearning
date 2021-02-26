class Car {
  constructor(name) {
    this.name = name;
  }
  getName = function(){
    console.log("Car:",this.name)
  }
}
class Truck extends Car{
  constructor(name,price){
    super(name)
    this.price = price
  }
}
const obj = new Truck('MAN',333333)
obj.getName()