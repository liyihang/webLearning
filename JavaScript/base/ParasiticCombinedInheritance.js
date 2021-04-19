function clone(parent,child){
  // 解决构造继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}
function Car(){
  this.name = "MAN"
  this.color = ['red','white','black']
}
Car.prototype.getName = function(){
  return this.name
}
function Truck(){
  Car.call(this)
  this.voice = 'wuwuwuuw^'
}
clone(Car,Truck)

Truck.prototype.getVoice = function(){
  return this.voice
}
let obj = new Truck()
console.log(obj)
console.log(obj.getName())
console.log(obj.getVoice())