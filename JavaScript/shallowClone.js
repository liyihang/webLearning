const shallowClone = (target) =>{
  if(target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? []:{};
    for(prop in target){
      if(target.hasOwnProperty(prop)){
        cloneTarget[prop] = target[prop]
      }
    }
    return cloneTarget;
  }
  return target;
}

let arr = [1,3,5,7,{name:'apple'}];
let newArr = shallowClone(arr);
console.log(newArr)