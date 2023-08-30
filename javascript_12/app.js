// ES6 Features

// Arrow function

// function add(x, y) {
//     return x + y;
// }

// const subtract = (x, y) => {
//     return x - y;
// }

// const multiply = (x, y) => x * y;

// console.log(subtract(4, 3));

// const obj = {
//     name: 'Saylani',
//     print: function () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000)
//     }
// };

// obj.print();

// function add (x = 5, y = 10) { // Default Parameters
//     return x + y;
// }

// console.log(add());

// if you are not sure that how many parametes have to pass to a function we have to give rest operator z..

// function printAll(x, y, ...z) { // rest Parameters
//     console.log(x, y, z);
// }

// printAll(5, 2, 8, 5, 8, 9);

// short syntax for Object

// const firstName = 'Samad';
// const lastName = 'Akram';

// const obj = {
//     firstName,
//     lastName,
//     printName () {
//         console.log("Samad Akram");
//     }
// };

// console.log(obj);
// obj.printName();

//  Destructuring

// const obj = {
//     firstName: 'Samad',
//     lastName: 'Baloch',
//     printName() {
//         console.log("Samad Akram");
//     }
// };

// const { firstName } = obj;
// console.log(firstName);


// const arr = ["Samad", "Akram", "Baloch"];

// const [, lastName, cast, add] = arr;

// console.log(lastName);

// Spread Operators

// const arr = ["Samad", "Akram", "Baloch"];

// const newArr = ["Some Data" ,...arr, "Another Data"];

// console.log(newArr);


// const obj = {
//     firstName: 'Samad',
//     lastName: 'Baloch',
// };

// const newObj = {...obj, hobbies: "Gaming", firstName: 'Ali'};
// console.log(obj);
// console.log(newObj);


// OOPS

// Classes
// // Classes ka kam hota hai objects bana kr dena
// Aesi programming jis me object involve hon

// const obj = {
//     name: "LED TV",
//     price: 12000
// };

// const obj2 = {
//     name: "LED TV Samsung",
//     price: 12000
// };

// const product = [obj, obj2];

// product.forEach(p => console.log(p.name));


class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const product1 = new Product("LED TV", 12000);
const product2 = new Product("LED TV Samsung", 15000);

const product = [product1, product2];
product.forEach(p => console.log(p.title));