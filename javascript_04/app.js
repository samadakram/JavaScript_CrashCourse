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

function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    return 1
}

console.log(factorial(5));