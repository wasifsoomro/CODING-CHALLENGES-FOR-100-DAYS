/*create interface in which i some key and and give values's data type 
it determine all the object have same keys and must smilar data types*/
interface Student {
    name: string,
    age: number,
    class: string
}

//create object pass interface types
let student1: Student = {
    name: "Ali",
    age: 8,
    class: "four"
}
//create another object have same key and data type of value
let student2: Student = {
    name: "Ahmed",
    age: 12,
    class: "Eight"
}

console.log(student1, "\n", student2)//print both objects
