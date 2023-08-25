// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello";


// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b>Pakistan Zindabad!</br>";
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";

// setInterval(function() {
//     if (myPara.style.display === "none") {
//         myPara.style.display = "block";
//     } else {
//         myPara.style.display = "none";
//     }
// }, 1000);


// let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad!</br>";
// yourPara.style.backgroundColor = "#000";
// yourPara.style.color = "#fff";

// yourPara.style.width = "100%";

// setInterval(function () {
//     let width = yourPara.style.width;
//     if (width === "100%") {
//         yourPara.style.width = "10%";
//     } else {
//         width = +width.replace("%", "");
//         yourPara.style.width = width + 10 + "%";
//     }
// }, 1000);

let myPara = document.getElementById("my-para");
myPara.innerHTML = "<br>Pakistan Zindabad!</br>"

setInterval(function() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    let color2 = Math.floor(Math.random()*16777215).toString(16);
    myPara.style.backgroundColor = "#" + color;
    myPara.style.color = "#" + color2;
}, 500);