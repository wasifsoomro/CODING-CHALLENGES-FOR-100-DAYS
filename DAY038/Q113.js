//113
let mapObject = new Map();
mapObject.set("Name", "Muhammad Wasif");
mapObject.set("Profession", "AI Engineer");
console.log(mapObject);
//apply .has method that check key present or not in object
let checkKey = mapObject.has("Name");
console.log(checkKey);
// apply .get method that print a value of that key i pass 
let getValue = mapObject.get("Name");
console.log(getValue);
export {};
