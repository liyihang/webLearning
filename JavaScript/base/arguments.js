function foo(name, age, sex) {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Object.prototype.toString.call(arguments));
}
foo('jim', 18, 'nv');
