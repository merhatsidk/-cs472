//Assignment
let arr = [1,2,3,4,5]; // an array
arr[0] = 5; // changing the first element 
arr.push(6);
arr.shift();
let arr2 = ["a","b"];
delete arr2[0];
empty = [];
console.log(arr);
console.log(arr2);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits);

//subset of an array
const fruits2 = ["Apple", "Lemon", "Avocado", "Pappaya", "Water Melon"];
// const citrus = fruits2.slice(1, 3);
// console.log(citrus);

// console.log(citrus.length); // length of an array citrus

fruits2.splice(2, 0, "Lemon", "Kiwi"); //splics for adding 
console.log(fruits2);
fruits2.splice(2, 2, "broccli", "Kiwi"); //splice for deleting
console.log(fruits2);

const cars = ["lambo", "bmw", "ferrari", "jaguar", "toyota"];
const country = ['usa', "germany","italy","france","japan"]
const car = cars.slice(1,3);
const newCars = cars.concat(country);
console.log(car);
console.log(newCars);