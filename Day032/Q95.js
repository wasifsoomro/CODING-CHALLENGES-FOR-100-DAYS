//95
//create a function that filter the number that are greater than 10
function filterFunction(numbers) {
    return numbers.filter(number => number > 10);
}
//create a array with numbers
let arr = [2, 9, 12, 10, 56, 25];
//create a new array with the length of each element present in array
console.log(filterFunction(arr)); //print a number that greater than 10
export {};
