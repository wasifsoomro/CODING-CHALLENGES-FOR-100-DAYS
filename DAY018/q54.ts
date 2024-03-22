//create a function passing two parameter return object
function createObject(dynamickey: string, value: string){
    //create a empty object with type annotation specifying that have dynamic string keys and any value
    const obj: { [key: string]: any} ={}
    obj[dynamickey] = value; //now we assing dynamic in the object with value
    return obj
}
//declare a variablle and pass function with two arguments that are actually key and value
const userObject = createObject("Wasif", "developer")
console.log(userObject) //print a object