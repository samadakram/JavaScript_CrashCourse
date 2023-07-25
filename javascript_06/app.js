// Objects

// let person = {
//     name: "Samad Baloch",
//     cnic: 1234567890,
//     eyesColor: "black",
//     canSpeakEnglish: true,
//     speak: function (sentence) { // Method
//         console.log(sentence + this.name);
//     }
// };

// let person2 = {
//     name: "Arbaz Ali",
//     cnic: 1234567890,
//     eyesColor: "black",
//     canSpeakEnglish: true,
//     speak: function (sentence) { // Method
//         console.log(sentence + this.name);
//     }
// };

// person2.speak("Assalam o Alaikum!, I'm ");

// let student1 = {
//     name: "Samad Akram",
//     rollNo: 1564,
//     teacher: "Sir Ishaq",
//     className: "React Native"
// };

// let student2 = {
//     name: "Mukho",
//     rollNo: 1564,
//     teacher: "Sir Ishaq",
//     className: "CSS"
// };

// function provideStudents(name, rollNo, teacher, className) {
//     return {
//         name: name,
//         rollNo: rollNo,
//         teacher: teacher,
//         className: className
//     }
// }

// let students = [
//     provideStudents("Samad Akram", 1548, "Sir Ishaq", "JS"),
//     provideStudents("KCh bhi", 1548, "Sir Ishaq", "JS"),
//     provideStudents("Q bataon", 1548, "Sir Ishaq", "JS"),];

// console.log(students);

let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : []; // for converting into object
function provideStudents() {
    let std = {
        name: prompt("Enter Name"),
        rollNo: prompt("Enter Roll Number"),
        teacher: prompt("Enter Teacher Name"),
        className: prompt("Enter Class Name"),
    };
    students.push(std);
    console.log(students);
    let stringify = JSON.stringify(students); // for converting into string
    localStorage.setItem("students", stringify);
}

//localStorage.setItem("name", "Abdul");

