let favPLaces: string [] = ["Madina", "Iran", "Turkey" , "Makkah", "Iraq"]

console.log("original order", favPLaces);

//Making a copy of array and sort it
console.log("Alphabetical Order", [...favPLaces].sort());
//printing original array
console.log("original order", favPLaces);

//reverse alphabetical order
console.log("reverse alphabetical order", [...favPLaces].sort().reverse());
//original order
console.log("original order", favPLaces);

//reversing original list

console.log("reversed order", favPLaces.reverse());
//printing original order
console.log("original order", favPLaces.reverse());
//printing alphabetical order
console.log("alphabetical order", favPLaces.sort());
//reversing alphabetical order
console.log("reverse alphabetical order", favPLaces.reverse());


