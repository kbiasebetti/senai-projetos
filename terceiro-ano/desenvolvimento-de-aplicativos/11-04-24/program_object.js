const Car = {
    name: "Palio",
    color: "Black",
    year: 2014,
    wheel: 4,
    rim: 15
}

console.log(Car)

let car02 = JSON.stringify(Car)
console.log("------------------------------")
console.log(car02)
console.log("------------------------------")

let carObj = JSON.parse(car02)
console.log(carObj)