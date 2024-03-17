let laptops = [
{make: "Dell", model: "corei5", year: 2020}, 
{make: "Apple", model: "macbook", year: 2021}, 
{make: "Dell", model: "XPS13", year: 2022}
]

/*desrtucturing syntax it assign first element of array in laptop1
 and second in laptop2 and third in laptop3*/
let [laptop1, laptop2, laptop3] = laptops 

console.log(laptop1, "\n" )
console.log(laptop2, "\n")
console.log(laptop3)

/* you can also acheive same result if you access particular index 
as we already did in previous excercise but here we learn new thing how to destructure array
 ****=> let laptop1 = laptop[0]  <=**** */