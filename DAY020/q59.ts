//create a function that returns an other function 
//i creates  magic box if user put 10 he gets 18 if user put 30 he gets 38

function specialNumber(addNumber:number): (number: number) => number {
    let constantNumber = function(number: number){
        return number + addNumber // adds my special number with user input and user get another number 
    }
    return constantNumber
}
//i store 8 in my mgic box 
let magicNumber = specialNumber(8)
console.log(magicNumber(10), "\n") //now if user adds 10 gets 18 in return 
console.log(magicNumber(30)) //user adds 30 gets 38 in return
