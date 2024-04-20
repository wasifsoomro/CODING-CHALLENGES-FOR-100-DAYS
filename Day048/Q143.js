//create a promise that resolve or rejected after checking condition
let reject_or_resolve_promise = new Promise((resolved, rejected) => {
    let randomNumber = Math.random() * 10;
    if (randomNumber < 5) { //create a condition that print a message on the basis of number generate
        resolved("Success");
    }
    else {
        rejected(new Error("Failure"));
    }
});
reject_or_resolve_promise.then((result) => console.log(result))
    .catch((error) => console.log(error.message));
export {};
