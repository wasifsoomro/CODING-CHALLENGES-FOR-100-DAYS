//handling error in callback pattern
function fetchData(callBack) {
    //declaring error condition
    let error = new Error("Failed to fetch data");
    let data = "Some Data";
    //create a condition with a chance of error
    if (Math.random() > 0.5) {
        callBack(null, data); //no error data is fetched
    }
    else {
        callBack(error); //error data is not fetched
    }
}
//fetch data function with error handling in the callback
fetchData((error, data) => {
    if (error) {
        console.log(error.message); //handles the error
    }
    else {
        console.log(data); //process the data
    }
});
export {};
