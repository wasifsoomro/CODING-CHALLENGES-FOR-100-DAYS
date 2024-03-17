//create a function pass a paramenter and return a object
function carInformation(manufacturer, model, options) {
    let car = {
        manufacturer,
        model,
        ...options
    };
    return car;
}
//console log with invoke function that return object
console.log(carInformation("Toyota", "4Runner", { year: 2020, color: "black" }));
export {};
