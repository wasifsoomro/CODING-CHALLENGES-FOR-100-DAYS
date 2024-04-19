//125
//Modifies a method to access another property
let modifyObject = {
    name: "Muhammad Wasif",
    age: 19,
    getName: function () {
        return this.name; //use this refer to a object itself and return its a name property 
    }
};
console.log(modifyObject.getName()); //print a object value that i return in methods using this 
export {};
