//96
//create a function that sum all the number that are stored in an array
function sumFunction(numbers:number[]){
  return numbers.reduce((previous , current)=> previous + current, 0)
}
//create a array with numbers
let arr: number[] = [2, 9, 12 , 10, 56, 25]

console.log(sumFunction(arr))//print a sum of all number

