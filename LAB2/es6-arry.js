let cars = ["Toyota", "Honda", "Mazda"]
let fruits =[];
fruits[0] = "Apple";
fruits[0] = "Mango";
let rname = new Array("Est", "Jhon", "James");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.slice(1, 0, "Mazda", "Kubota");
console.log(cars);

const carSlide = cars.slice(1, 2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars, ...rname];
console.log(newArr2);

console.log(newArr.toString());