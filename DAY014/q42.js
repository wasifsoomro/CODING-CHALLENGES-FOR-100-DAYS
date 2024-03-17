//import function and array from 41 task
import { magicianNames, show_Magician } from "./q41.js";
//create function and pass array that i import
function makegreat(magicianNames) {
    //now use loop to modify array
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + "The Great";
    }
}
makegreat(magicianNames); //modifies original array
show_Magician(magicianNames); // show modified elements
