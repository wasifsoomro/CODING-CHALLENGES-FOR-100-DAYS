console.log("Before Synchronous Operation");
for (var i = 0; i < 5; i++) {
    console.log("Synchronous operation");
}
console.log("After synchronous opertion");
console.log("Before Asynchronous Operation");
setTimeout(function () {
    console.log("Asynchronous operation");
}, 1000);
console.log("After Asynchronous Operation");
