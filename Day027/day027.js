// //79
// //Create a object with three properties
// interface Car {
//     make: string;
//     model: string;
//     year: number;
//     color?: string;
// };
// let car: Car = {
//     make: "Honda",
//     model: "xyz",
//     year: 2022
//   }
//   //Printing and accessing single value 
//   console.log(car.make);
//   //80    //create a object with three properties
//   let car2: Car = {
//     make: "Honda",
//     model: "xyz",
//     year: 2022
//   }
//   car2.color = "black"//adding new property in object
//   car2.year = 2023 //updating existing value with new value 
//   console.log(car2)//printing object
//81
//create a function with one parameter and its type is object Apply for in loop that access every property that available in object
function objectPropert(obj) {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]} `);
    }
}
//invoke function and pass a object as an argument
objectPropert({ make: "Honda", model: "xyz", year: 2023, color: "black" });
export {};
