//import array and function from excercise 41
import { magicianNames, show_Magician } from "../DAY014/q41.js";
/*create a function and pass prvious array as argument and create a empty array and
use foreach method that iterate every element and push it new empty array by this my original array
remain same and i make a new modified array
*/
function make_great(magicianNames) {
    let greatMagician = [];
    magicianNames.forEach(magicianNames => { greatMagician.push(` ${magicianNames} The Great`); });
    return greatMagician;
}
//create a new modified list
let greatMagician = make_great(magicianNames);
show_Magician(magicianNames); //original list
show_Magician(greatMagician); //modified list
