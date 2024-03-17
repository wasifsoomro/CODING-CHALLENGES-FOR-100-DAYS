//create array
let magicianNames = ["Harry Houdini", "David Blaine", "Deren Brown"];
//create a function and pass a array as parameter
function show_Magician(magicianNames) {
    //using for of loop that print each element of array
    for (const magician of magicianNames) {
        console.log(magician);
    }
}
show_Magician(magicianNames); // invoking function
export { magicianNames, show_Magician }; //exporting finction and array
