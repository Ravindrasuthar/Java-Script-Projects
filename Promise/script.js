// Callback hell:
function asyncOperation1(callback) {
    setTimeout(() => {
        console.log("Opertion 1");
        callback();
    }, 1000);
}

function asyncOperation2(callback) {
    setTimeout(() => {
        console.log("Operation 2");
        callback();
    }, 1000);
}

function asyncOperation3(callback) {
    setTimeout(() => {
        console.log("Opertion 3");
        callback();
    }, 1000);
}

function startCallbackHell() 
{
    asyncOperation1(function () 
    {
        asyncOperation2(function () 
        {
            asyncOperation3(function () 
            {
                console.log("Callback Hell Over");
            });
        });
    });
}

startCallbackHell();

// Creating a Promise:
// let promise =  new Promise(function(resolve, reject){
// Working Code.... 
// })

// const request = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Promise Initiated");
//         reject();
//     }, 2000);
// });
// console.log(request);


// 1. Promise Creation
// function createSimplePromise() {
//     return new Promise((resolve, reject) => {
//         const isSuccess = Math.random() > 0.5;
//         console.log(isSuccess);

//         // Asynchronous task performed:
//         setTimeout(() => {
//             if (isSuccess) {
//                 resolve("Operation Successful");
//             }
//             else {
//                 reject("Operation failed");
//             }
//         }, 1000);
//     });
// }

// // handling Promise

// createSimplePromise()
//     .then(successMessage => {
//         console.log("Success", successMessage);
//     })
//     .catch(err => {
//         console.log("Error:", err);
//     });

// Static methods in Promise:
// let promise1 = Promise.resolve("One");
// let promise2 = Promise.reject("Two");
// let promise3 = Promise.resolve("Third");
// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Four")
//     }, 2000);
// });


// Promise.all([promise1, promise2, promise3, promise4])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((err) => {
//         console.log("Error", err);
//     })

// returns: New Promise when all resolved or error if any rejected

/* H.W.=>
MDN Web Docs
Promise.allSettled();
Promise.any();
Promise.race();
*/


// Async - Await


async function fetchData() // async automatically makes it return a Promise
{
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Error given");
        }

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

fetchData();


