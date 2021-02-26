let car = {
  name: 'MAN',
  color: ['red','gold','white'],
  getName: function (){
    return this.name
  }
}
function clone(original) {
  let clone = Object.create(original);
  clone.getColor = function() {
    return this.color;
  };
  return clone;
}

let obj = clone(car);

console.log(obj.getName());
console.log(obj.getColor());