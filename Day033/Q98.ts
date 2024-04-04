//98
//create a function that returns remaining days in next year
function dayLeftInNewYear(){
  //we access to day date
  let todayDate = new Date()
  //access new date from today to next year
  let newYear = new Date(todayDate.getFullYear() + 1, 0, 1)
  //now we get milisecond from now untill next year and subtract miliseconds that passed from today to day of this year start mean 1 january 2024 to today date
  let diffDate = newYear.getTime() - todayDate.getTime()
  //convert miliseconds in days
  let remainingDays = Math.ceil(diffDate / (1000 * 60 * 60* 24))
  return remainingDays
}
console.log(dayLeftInNewYear())//return remaining days