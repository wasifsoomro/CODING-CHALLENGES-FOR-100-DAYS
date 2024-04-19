//106
//Create a function that return a result in true and false if year is leap year return true else false
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2024)); //print a result
export {};
