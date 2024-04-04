//99
//create function return next birthday
function myNextBirthDat(day: any, month: number): Date {
    //aceesing today date
   let today = new Date();
   //accesing present year
   let year = today.getFullYear();
   //accesing new date and apply operation -1 on month, i used it to adjust the user-provided month value to JavaScript 0 indexed month representation
   let birthDay = new Date (year, month - 1, day)
   //now apply condition if user this year birthday is passed so tell me the next year birthday
   if(birthDay < today){
     birthDay.setFullYear(year + 1)
   }
   return birthDay 
  }
  let yourNextBirthDay =myNextBirthDat(1, 9)
  console.log("you next Birthday on", yourNextBirthDay.toLocaleDateString())//now print my birthday date