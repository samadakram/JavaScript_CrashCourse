// Functions
// alert // Built-In function
// Custom Functon
// function greet(studentName) { // Parameter
//     console.log("Hello " + studentName);
// }

// greet("Arbaz"); // Argument
// greet("Hamaz"); // Argument
// greet("Shayan"); // Argument


// function employee(fileNo) { // Parameter
//     return "Working on file no: " + fileNo;
// }

// let data = employee(7);
// console.log(data)

// Recursion // kisi bh kaam ko bar bar karwany ko

// function writeData(data, times) { // calls itself untill certain condition is true
//     document.write(data);
//     document.write(times);
//     if (times > 0) {
//         writeData("Hello", times - 1);
//     }
// }

// writeData("Hello", 5)

// function factorial(num) {
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     return 1
// }

// console.log(factorial(5));


// Closures

// Global Scope => whole file
// Local Scope => inside function

// varibale written in Global Scope is accessable to child scope.
// But Variables written in Child Scope is not accessable in global scope.

// let abc = 7; // Global Scope
// function print(def) {
//     //let def = 14; // Local Scope
//     return function (ghi) {
//         console.log(def + ghi);
//     }
// }

// let innerFunction = print(7);
// innerFunction(7);

function saveURL(url) {
    return function () {
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
    }
}

const makeRequest = saveURL('https://jsonplaceholder.typicode.com/todos');

makeRequest();