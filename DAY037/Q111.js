//111
function personAge(age) {
    if (age > 1 && age <= 13) {
        console.log("You are Child");
    }
    else if (age > 13 && age <= 19) {
        console.log("You are teenager");
    }
    else if (age > 19 && age <= 50) {
        console.log("You are adult");
    }
    else if (age > 50) {
        console.log("You are older");
    }
    return age;
}
personAge(25); //invoking function with passing argument
export {};
