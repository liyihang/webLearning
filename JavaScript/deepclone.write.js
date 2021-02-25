let obj1 = {
  a:{
    name:'brand'
  },
  sym:Symbol(1)
}
function deepclone(obj){
  let cloneObj = {}
  for(let key in obj){
    if(typeof obj[key] ==="object"){
      cloneObj[key] = deepclone(obj[key])
    }else{
      cloneObj[key] = obj[key]
    }
  }
  return cloneObj
}
let obj2 = deepclone(obj1)
obj2.a.name = "Gucci";
console.log(obj2)
console.log(obj1)


