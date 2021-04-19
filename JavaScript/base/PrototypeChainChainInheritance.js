// Prototype chain inheritance  原型链继承
function Car(){
  this.name ='Volvo',
  this.color = ['white','black','red']
}
function Truck(){
  this.price = 20000
}
Truck.prototype = new Car()
const obj = new Truck();
const obj1 = new Truck();
obj.price = 30000;

console.log(obj)
console.log(obj1)

// 原型继承  内存是共享的 ，一个改变 另一个也会改变