// class Product {
//     constructor(title, amount, description) {
//         this.title = title;
//         this.price = amount;
//         this.details = description;
//     }
// }

// const product1 = new Product("LED TV", 12000, "4K Ultra HD Display");
// const product2 = new Product("Android Phone", 120000, "Android 12 OS");
// const product3 = {
//     title: "Android Phone",
//     price: 120000,
//     description: "Android 12 OS"
// };


// console.log(product1, product2);
// console.log(product3 instanceof Product);

// class Shape {
//     constructor(id, x, y) {
//         this.id = id;
//         //this.move(x, y)
//     }
//     move(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const square = new Shape("Square", 5, 5);
// const rectangle = new Shape("Rectangle", 5, 5);
// //console.log(square);
// square.move(7, 8);
// console.log(square, rectangle);


// Ptototype : these are additional details of objects

const students = [];

class Student {
    static data = "Hello"; // static property
    constructor(fulName, rollNo, batch, subject) {
        this.fulName = fulName;
        this.rollNo = rollNo;
        this.batch = batch;
        this.subject = subject;
        this.attendance = [];
    }

    markAttendance() {
        this.attendance.push(new Date());
    }

    static sayYourName() { // static methods
        console.log("Say Name");
    }
}

class Volunteer extends Student {
    constructor(fulName, rollNo, batch, subject) {
        super(fulName, rollNo, batch, subject)
        this.canVolunteerIn = [];
    }

    addVolunteerSkill(skill) {
        this.canVolunteerIn.push(skill);
    }

}

const hamza = new Student("Hamza Iqbal", 1234, 1, "JavaScript");
const shahzad = new Volunteer("Shahzad Iqbal", 1235, 1, "JavaScript");
hamza.markAttendance();
shahzad.markAttendance();

shahzad.addVolunteerSkill("HTML");
shahzad.addVolunteerSkill("CSS");
Volunteer.sayYourName(); // static method

students.push(hamza);
students.push(shahzad);

console.log(students);