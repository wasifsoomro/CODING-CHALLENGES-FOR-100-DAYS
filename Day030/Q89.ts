//89
//create a function pass one parameter 
function convertStringINNumber(str:string){
    let typeCheck = parseFloat(str)
    return typeof(typeCheck)+ "\n"+ typeCheck//return typeof typecheck for checking that string convert in number and print a value 
  }
  console.log(convertStringINNumber("58"))//print a result