//114
let mapObject = new Map();
mapObject.set("Name", "Muhammad Wasif");
mapObject.set("Profession", "AI Engineer");
console.log(mapObject);
//apply forEach method that return a value that present in map object 
mapObject.forEach((name, value) => {
    console.log(value, name);
});
export {};
