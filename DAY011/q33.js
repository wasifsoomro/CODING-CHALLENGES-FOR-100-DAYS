let ordinal_Numbers = [];
//Using loop with if statement 
for (let d = 1; d < 10; d++) {
    //loop iterate a number and push it to the ordinal numbers array and then if statement add a suffix according number 
    ordinal_Numbers.push(d);
    if (d == 1) {
        console.log(`${d}st`);
    }
    else if (d == 2) {
        console.log(`${d}nd`);
    }
    else if (d == 3) {
        console.log(`${d}rd`);
    }
    else {
        console.log(`${d}th`);
    }
}
export {};
