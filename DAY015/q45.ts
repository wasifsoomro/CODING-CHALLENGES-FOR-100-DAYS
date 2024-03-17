//create a interface or structure of my object that always availabe in object
interface Car {
    manufacturer: string;
    model: string;
    year?: number;
    color?: string
}
//create a function pass a paramenter and return a object
function carInformation(manufacturer: string, model: string, options?:{year: number, color:string}): Car{
    let car: Car = {
        manufacturer,
        model,
        ...options
    }
    return car
}
//console log with invoke function that return object
console.log(carInformation("Toyota", "4Runner", {year: 2020, color:"black"}));