  //128
   //create arrow function with rest parameters and apply reduce methods that multiply all the numbers that i pass as arguments
   let multipleParameters = (...num: number[]) => num.reduce((total, number) => total * number , 1)
   console.log(multipleParameters(4,5, 8, 6))
   