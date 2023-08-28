// Async example

// function runAfter1Sec() {
//     setTimeout(function() {
//         console.log('Done');
//     }, 2000);
// };

// console.log('Pakistan Zindabad');

// What are callbacks?
// Callbacks are functions, which runs in async bevahiour after completion of our work.

// koi bh esa function jis ko hum us waqt chalaty hein jb hmara kaam complete hojata hai.
// information k lye batany k lye jo kaam apny kia tha wo complete hogya hai

// a function which is passed as a parameter to another funtion.

// Example: greetings(callback function);
// ---------------------------------------------------------------------------

// Promises
// function runAfter1Sec(val) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             let data = 5 + val;
//             resolve(data);
//         }, 1000);
//     });
// };

// runAfter1Sec(5)
//     .then(function (data) {
//         //console.log(data);
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         //console.log(data);
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         //console.log(data);
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// Async/Await

function runAfter1Sec(val) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let data = 5 + val;
            if (data % 2 === 0) {
                resolve(data);
            } else {
                reject("Odd number Detected!");
            }
        }, 1000);
    });
};

//promise with .then
// runAfter1Sec(6)
//     .then(function (data) {
//         return runAfter1Sec(data);
//     }).catch(function (error) {
//         console.error(error);
//     })

// promise with async await

(async function () { 
    try {
        const data = await runAfter1Sec(5);
    } catch (err) {
        console.error(err);
    }
})();


// async function run() { // by default  retunrs a promise
//     const data = await runAfter1Sec(5);
//     const data1 = await runAfter1Sec(data);
//     const data2 = await runAfter1Sec(data1);
//     const data3 = await runAfter1Sec(data2);
//     return data3;
// };

// run().then(function(data3) {
//     console.log(data3);
// })