// array of and array from
Array.of(8.0); // [8]

Array(8.0); // [empty × 8]

Array.of(8.0, 5); // [8, 5]

Array(8.0, 5); // [8, 5]

Array.of('8'); // ["8"]

Array('8'); // ["8"]


var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
Array.from(obj, function(value, index){
  console.log(value, index, this, arguments.length);
  return value.repeat(3);   //必须指定返回值，否则返回 undefined
}, obj);


 //output ["aaa", "bbb", "ccc"]