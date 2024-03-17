//I created a intrface and store all the prperties and types that contains in my object
interface Laptop {
    make: string;
    model: string;
    year: number;
    describe(): string;
}
//create a object and pass interface that say all the prperties types must same as described in interface

let laptop1: Laptop={
    make: "Dell",   
    model: "Core i5",
    year: 2022,
    describe(): string | any{
        console.log(`\nThis is a ${laptop1.make} laptop and model is ${laptop1.model} year ${laptop1.year}\n`)
    }
}
laptop.describe() // invoke function as property outside the object scope that print my msg