//create promsie.all that print a value after all promises resolved
let promise1 = Promise.resolve(5);
let promise2 = 88;
let promise3 = new Promise((resolve) => {
    setTimeout(resolve, 8, "Wasif");
});
//this show that how promise.all wait for all promises to resolved and then logs it in an array
Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
export {};
