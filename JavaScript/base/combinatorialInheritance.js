function Car(){
  this.name = "MAN"
  this.color = ['red','white','blue']
}
Car.prototype.getName = function () {
  return this.name
}
function Truck(){
  Car.call(this)
  this.price = 6666
}
Truck.prototype = new Car()
// 构造器指向自己
Truck.prototype.constructor = Truck
var obj1 = new Truck()
var obj2 = new Truck()
obj1.color.push('black')
console.log(obj1.color)
console.log(obj2.color)
console.log(obj1.getName())
console.log(obj2.getName())

