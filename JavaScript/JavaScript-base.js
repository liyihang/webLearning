
    let a = {
      name: 'tom',
      age: 20
    }
    let b = a 
    console.log(a.name);
    b.name = "jack"
    console.log(a.name);
    console.log(b.name);

    function change(o){
      o.age = 24
      o = {
        name: 'lilei',
        age: 30
      }
      return o
    }
    let c= change(a);
    console.log(c.age);
    console.log(c.name);
    console.log(a.age);
    console.log(a.name);
console.log("----------------Object assign  浅拷贝---------------");
let target = {}
let obj = {name:"jim",age:18};
Object.assign(target,obj);
console.log(target);
target.age = 30;
console.log(target);
console.log(obj)
console.log("---------------------------------------------------")
let object1 = {name:'apple',attr:{weight:50}};
let sym = Symbol(1);
Object.defineProperty(object1,'innumerable',{value:'不可枚举的',enumerable:false})
let obj2 = {}
Object.assign(obj2,object1)
object1.attr.weight = 1000;
console.log("object1:",object1)
console.log("obj2:",obj2)
console.log("---------------------------------------------------")
let arr = [1,3,4,6,8,{name:'jim'}];
let copyArr = arr.concat();
console.log(copyArr)
let copyArr1 = arr.slice()
console.log(copyArr1)