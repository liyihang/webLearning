function Car(){
  this.name = "MAN"
}
Car.prototype.getName = function(){
  return this.name
}

function Truck(){
  Car.call(this)
  this.price = 30000
}
let obj = new Truck()
console.log(obj)
console.log(Truck.getName())
// 构造函数继承：父类的引用属性  不会被共享