console.log("Before Synchronous Operation")
//synchronous code in contrast runs sequentially, blockimg further execution until current operation completes
for(let i = 0; i < 5; i++){
    console.log("Synchronous operation")
}

console.log("After synchronous opertion")


console.log("Before Asynchronous Operation")
/*asynchronous callback perform long network request or set timers 
without bocking the main thread enabling the continue of code exection*/

setTimeout(()=> {
    console.log("Asynchronous operation")
}, 1000)

console.log("After Asynchronous Operation")