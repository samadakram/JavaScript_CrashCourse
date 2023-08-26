//  const date = new Date();

//  console.log(date.getDate());
//  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//  console.log(months[date.getMonth()]);

//  console.log(date.getFullYear());
//  console.log(date.getHours());
//  console.log(date.getMinutes());

//  date.setDate(28);
//  console.log(date);

// const marriageDay = new Date();

// marriageDay.setDate(26);
// marriageDay.setMonth(11);
// marriageDay.setFullYear(2025);
// marriageDay.setHours(0);
// marriageDay.setMinutes(0);

// const date = new Date();

// let diff = marriageDay.getTime() - date.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));


const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const amPmElem = document.getElementById('apPm');

setInterval(function () {
    const date = new Date();
    let hours = date.getHours();
    let amPm = "AM";
    if (hours > 11) {
        amPm = "PM";
        if (hours > 12) {
            hours -= 12
        }
    }
    hoursElem.innerText = hours;
    minutesElem.innerText = date.getMinutes();
    secondsElem.innerText = date.getSeconds();
    amPmElem.innerText = amPm
}, 1000);