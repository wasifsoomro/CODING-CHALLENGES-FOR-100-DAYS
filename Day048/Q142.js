//create a promise that resolved by print message after specific time
let creatingPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Print message after problem resolved");
    }, 3000);
});
creatingPromise.then((message) => {
    console.log(message);
}); //with delay of three seconds afteer my message is printed
export {};
