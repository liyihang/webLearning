function _new(type){
  debugger
  if(typeof type !== 'function'){
    throw 'type must be function'
  }
  var args = Array.prototype.slice.call(arguments, 1);
  let obj = new Object()
  //链接空对象到原型上
  obj.__proto__ = Object.create(type.prototype)
  //绑定obj的this上下文
  let res = type.apply(obj,args)
  let isObject = typeof res === 'object' && res !== null
  let isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
function Car(name,color){
  this.name = name
  this.color = color
  Car.prototype.getName = function(){
    return this.name
  }
}
let obj11 = _new(Car,'MAN',['red', 'blue'])
console.log(obj11);