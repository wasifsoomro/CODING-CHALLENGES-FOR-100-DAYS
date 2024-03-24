//Question 68
//Create a function with two parameter
function decimalNumber(decimal1: number, decimal2: number){
    //return a result with multiplying two decimal number and multiply it 100 and devide it 100 it return result in two decimal places
    return Math.round((decimal1 * decimal2)* 100) / 100
  }
  //print a result 
  console.log(decimalNumber(0.3, 0.2))//shows 0.06