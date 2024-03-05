//store string in variable

let nameCases: string= "Muhammad wasif"

//apply uppercase method to convert all characters of string in uppercase

nameCases = nameCases.toUpperCase()
console.log(nameCases)

//apply lowercase method to convert all characters of string in lowercase

nameCases= nameCases.toLowerCase()
console.log(nameCases)

/*
convert string to title case so now i declare
 a another variable and use previous
 declared variable in which i store string and i apply split method, 
 split method splits every string character into array 
 and apply map function each character on the array 
 and capitalize its first letter, and then i apply substring methods
and pass 1 that indicate from 1 index to last index of words remain same,
in last i apply join method that adds all element of array into string   
 */
let nameCases2 = nameCases.split(" ").map((title:string)=>
 title[0].toUpperCase() + title.substring(1)).join(" ")
console.log(nameCases2)