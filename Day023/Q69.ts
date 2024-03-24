// Question 69
//create a function with two paramter and return a object 
function deviding(devided: number, devisor: number): {quotient: number, remainder: number}{
    //Apply math.floor function that convert decimal places into integer number 
    let quotient = Math.floor(devided / devisor) 
    //Now get a remainder 
    let remainder = devided % devisor
    return {quotient, remainder}
  }
  console.log(deviding(11, 2))//print a quotient mean how many times number is devided and remainder