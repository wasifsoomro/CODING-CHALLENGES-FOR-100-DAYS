//Day 42
//124
//Create a object with two properties and method that return its age
let object = {
    name: "Muhammad Wasif",
    age: 19,
    getAge: function () {
        return this.age; //use this refer to a object itself and return its a age property 
    }
};
console.log(object.getAge()); //print a object value that i return in methods using this 
export {};
