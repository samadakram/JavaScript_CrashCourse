// Array

// let months = ["January", "February"];

// months[2] = "March"; // Not Recommended

// let shouldIStore = prompt("Array me value rakhun?");

// if (shouldIStore === "yes") {
//     months.push("March");
// }

// console.log(months);

// let months = ["January", "February", "March", "Sept", "April", "May"];

// months.shift(); // Removes 1st index of array
// months.unshift("Jan"); // Add value on 1st index
// months.push("May") // Add value on last+1 Index
// months.pop(); //Removes last index
//months.length // Tells the quantity of valus // This called property


// let deletedElements = [];
// let removedElement = months.shift();
// deletedElements.push(removedElement);


// months.splice(3, 1, "June", "July"); // Remove or Replace values // 1st parameter is for index number and 2nd  parameter to define how many values we have to remove

// months.slice(); // Provides a new copy of array

// let newArray = months.slice(0, 2);

// console.log(months);
// console.log(newArray);
// console.log(deletedElements);

// forEach : loops through array values

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function (val, index) {
//     console.log(index, val);
// })

// filter() 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let filteredArray = arr.filter(function (val) {
//     return val % 2 === 0;
//     // if (val % 2 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
// });

// console.log(filteredArray, arr);

// Sort();

// let arr = [1, 9, 4, 5, 3, 7, 6, 2, 8];

// let sortedArray = arr.sort(function (a, b) {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// });

// console.log(sortedArray);

// reduce()

let arr = [1, 9, 4, 5, 3, 7, 6, 2, 8];


let total = arr.reduce(function (preValues, currValue) {
    return preValues + currValue
}, 0)

console.log(total)