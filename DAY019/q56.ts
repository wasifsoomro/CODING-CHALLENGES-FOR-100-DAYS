//creat a array with mixed type
let mixedType: any[] = ["Muhammad", "Wasif", 19, true, "Soomro", 20, false]

//now declared a varaible and apply method .filter that will filter all the string data type 
let stringArray: string[] = mixedType.filter(mixedType => typeof mixedType === "string")

console.log("\n", stringArray, "\n")//print a string data type array