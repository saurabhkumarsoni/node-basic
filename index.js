let a = 10;
let b = 0;

// setTimeout(() => {
//     b = 30;
// }, 2000);

// console.log(a+b)    // here it will print because async progaming not wait unitl get the datab here seettimeout taking 2 sec and asyn will  not wait so we have to use promise to get the value accurate value of a + b


let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

promise.then((b)=>{
    console.log(a+ b) // output is 40
})


