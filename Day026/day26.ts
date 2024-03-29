//76
//create a function with two parameter
function twoParam(num1: number, num2:number){
    return num1 + num2 //return a sum of num1 and num2
  }
  console.log(twoParam(10, 15))//print 35 as a result
  
  
  //77
  //create a function with default value
  function greetUser(name:string = "Anonymous"){
    console.log(`Hello ${name}`) //print a value with greeting
  }
  greetUser("Wasif") //invoking function with passing argument that change a default value
  greetUser() //invoking function without passing argumnet but print with default value 
  

  //78
  //Two Ways to Create a function one is without storing in varaible and onother is store function by declaring variable
  
  //create a simple function without store it in any variable
  function squareDeclaration(num1:number, num2:number){
    return num1 * num2
  }
  console.log(squareDeclaration(6, 5))
  
  //Create a anonymous function because we store it in variable
  let squareExpression = function(num1:number, num2:number) {
    return num1 * num2
  }
  console.log(squareExpression(6, 5));