//create a object and pass interface that say all the prperties types must same as described in interface
let laptop1 = {
    make: "Dell",
    model: "Core i5",
    year: 2022,
    describe() {
        console.log(`\nThis is a ${laptop1.make} laptop and model is ${laptop1.model} year ${laptop1.year}\n`);
    }
};
laptop1.describe(); // invoke function as property outside the object scope that print my msg
export {};
