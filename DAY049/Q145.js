function functiocallBack(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
let concatenate = (a, b) => {
    console.log(a + b);
};
functiocallBack(concatenate, "Hello", "Wasif");
export {};
