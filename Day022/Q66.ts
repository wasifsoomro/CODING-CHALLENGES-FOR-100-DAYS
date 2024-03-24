//Question 66
//Create a function with two parameters
function checkingBothTrue(bool1:boolean, bool2:boolean){
    return bool1 && bool2 //Apply && operator that return true if both arguments are true and return false if one of is false
  }
  console.log(checkingBothTrue(true, true)) //print a true because both are true
  console.log(checkingBothTrue(true, false)) //print a false because one of the value false