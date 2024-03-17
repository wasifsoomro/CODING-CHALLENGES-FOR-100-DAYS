//create a object and pass interface that say all the prperties types must same as described in interface
let laptop = {
    make: "Dell",
    model: "Core i5",
    year: 2022,
    describe() {
        console.log(`\nThis is a ${laptop.make} laptop and model is ${laptop.model} year ${laptop.year}\n`);
    }
};
laptop.describe(); // invoke function as property outside the object scope that print my msg
export {};
