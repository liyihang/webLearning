let car = {
  name: 'MAN',
  color: ['red','gold','white'],
  getName: function (){
    return this.name
  }
}
let truck = Object.create(car)
truck.name = 'Volvo';
truck.color.push('black')
let lorn = Object.create(truck)
lorn.color.push('blue')
console.log(truck.name === truck.getName())
console.log(truck.getName())
console.log(lorn.color)
console.log(car.getName())