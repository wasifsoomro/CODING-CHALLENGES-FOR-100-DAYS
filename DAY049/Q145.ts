function functiocallBack(callBack: (arg1: string, arg2: string)=> void, arg1:string, arg2: string){
    callBack(arg1, arg2)
}
let concatenate= (a: string, b: string)=>{
    console.log(a + b)
}
functiocallBack(concatenate, "Hello", "Wasif")