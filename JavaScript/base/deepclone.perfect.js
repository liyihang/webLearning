const isComplexDataType = (obj) => (typeof obj === "object" ||typeof obj === 'function') && obj !== null
const deepclone = (obj, hash = new WeakMap()) =>{
  if(obj.constructor === Date){
    return new Date(obj)
  }
  if(obj.constructor === RegExp){
    return new RegExp(obj)
  }
  // 解决循环引用问题
  if(hash.has(obj)) return hash.get(obj)
  let allAttr = Object.getOwnPropertyDescriptor(obj)
  // 遍历参数的所有特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj),allAttr)
  // 继承原型链
  hash.set(obj,cloneObj)
  for(let key of Reflect.ownKeys(obj)){
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function')?deepclone(obj[key],hash):obj[key]
  }
  return cloneObj
}

let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};

Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的属性
let cloneObj = deepclone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
// 有待深入