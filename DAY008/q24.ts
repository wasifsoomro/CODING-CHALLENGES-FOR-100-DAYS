//test using equality
let a = "Wasif"
console.log(a == "Wasif"); //true
console.log("Wasif" !== a); //false

//test using lowercase 
console.log(a.toLowerCase() == "wasif") //true
console.log(a.toLowerCase() == "Wasif") //false


//Numerical tests
console.log(5 < 9) //true
console.log(5 > 9) //false


//test using and "&&"  and or "||" operator
console.log(7 < 10 && 10 < 7 ) // false
console.log(8 > 11 || 11 > 8) //true


//test is item is in array or not
let student: string[] = ["Ali", "Ahmed", "Amin", "Asif"]
console.log(student.includes("Amin"))  //true
console.log(!student.includes("Ahmed")) //false

