//create two array store elements 
let eidSuitprice: number[] = [1500, 1200, 3000]
let eidSuitprice2: number[] = [1800, 1000, 2500]

//now declare an other varaible and use spread operator to combin both array

let combined = [...eidSuitprice, ...eidSuitprice2]
/*now use sort method that sort a values and use 
comparator function that sort a array and print in ascending order*/
combined.sort((a, b) => a - b)
console.log(combined, "\n")

//print sorted array in descending order
combined.sort((a, b) => b - a)
console.log(combined)
