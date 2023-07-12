// Prompt Always gives us value as string


// Comparision Operators
// ==, ===, !=, !==

// In == and != , It checks only value not type 

//console.log(5 == "5"); // true

// In === and !== , It checks value and type both 

//console.log(5 == "5"); // false

// let userAge = +prompt("Enter your Age");

// if (userAge >= 18) {
//     console.log("You can apply for NIC");
// } else {
//     console.log("You are not Eligible!")
// }

// let userFavNum = +prompt("Enter your Fav Number");

// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     console.log("You Won !");
// } else {
//     console.log("You Lose ! The computer num was: " + computerNum);
// }


// let userInput = prompt("Even or Odd");

// let computerNum = Math.round(Math.random() * 10);

// if (computerNum % 2 === 0 && userInput === "even") {
//     console.log("You Won !" + computerNum);
// } else if (computerNum % 2 !== 0 && userInput === "odd") {
//     console.log("You Won !" + computerNum);
// } else {
//     console.log("You Lose ! The computer num was: " + computerNum);
// }
let table = 7
for (let i = 1; i <= 10; i++) {
    console.log(table + " X " + i + " = " + table * i);
}