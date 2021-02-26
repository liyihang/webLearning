let a = {
  name: "tony",
  getName: function(msg){
    return msg + this.name
  }
}
let b = {
  name: "Bruce"
}
// console.log(a.getName("hello"))
// console.log(a.getName.call(b,'hi'))
// console.log(a.getName.apply(b,['hello  ']))
// let nickname = a.getName.bind(b,'hi   ')
// console.log(nickname())

// 应用场景
/**
 * 1、数据类型的判断
 */
function getType(obj){
  let type = typeof obj
  if(type !== "object"){
    return type
  }
  return Object.prototype.toString.call(obj).replace(/^$/,'$1')
}
let info = {name:'jim',color:[1,2,3]}
console.log(getType(info))

/**
 * 2、类数组操作方法
 * 
 */
let arraylink = {
  0: 'jim',
  1: 'tony',
  length: 2
}
Array.prototype.push.call(arraylink,'tom','tony')
console.log(typeof arraylink)
console.log(arraylink)
/**
 * 3、获取数组的最大值或者最小值
 */
let arr = [2,7,12,4,23,56]
const max = Math.max.apply(Math,arr)
const min = Math.min.apply(Math,arr)
console.log(max,min)

/**
 * 4.利用call apply实现继承
 *
 */
function Car(){
  this.name = "MAN"
  this.color = ['red', 'blue']
  Car.prototype.getName = function(){
    return this.name
  }
}
function Truck(){
  Car.call(this)
  this.price = 55555
}

Truck.prototype = new Car()
Truck.prototype.constructor = Truck

const obj = new Truck()
console.log(obj.getName())