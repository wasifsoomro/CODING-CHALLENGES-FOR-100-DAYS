//create a function with passing restparameter
function myhobbies(...hobies:string[]){
    //apply for loop on restparameter and print a message with every value
    for(const hobby of hobies){
        console.log(`I love ${hobby}`)
    }
}
//invoking function by passing arguments
myhobbies("coding ", "Reading", "helping")
