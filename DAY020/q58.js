//create a culculator that culculate average
//create a function with restparameter that takes unlimited number of arguments
function calculateAverage(...score) {
    /*decalre a varaible inside a function and apply a reduce method on score parametr that
     adds all the arguments and devide it number of arguments*/
    let average = (score).reduce((perviousValue, currentValue) => perviousValue + currentValue, 0);
    return average / score.length;
}
//store a function with arguments in varaible
let averageScore = calculateAverage(56, 25, 105, 78, 2, 49);
console.log(averageScore); //prints a varaible
export {};
