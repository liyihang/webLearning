Function.prototype.callClone = function(...arg) {
      let context = arg[0] || window; 
      if(typeof context !== 'object') {
        context = Object.create(null); 
      }
      let fn = Symbol();
      context[fn] = this;  
      let result = context[fn](...arg.slice(1));
      delete context[fn];
      return result;   
    }
    var value = 2;
    
    var obj = {
        value: 1
    }
    
    function bar(name, age) {
        console.log(this.value);
        return {
            value: this.value,
            name: name,
            age: age
        }
    }
    
    bar.callClone(null); // 2
    
    console.log(bar.callClone(obj, 'kevin', 18));
