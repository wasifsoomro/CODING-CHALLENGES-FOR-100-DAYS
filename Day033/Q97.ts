//97
//create a function to get current date in current formate
function showDate(){
    //Getting Date 
    let date = new Date()
    //Acessing day applying getDay method and apply another method for ensuring that day has 2 number like this 04
    let day = String(date.getDay()).padStart(2, '0')
    //Aceesing month with +1 because month index start with december so +1 gives me current month
    let month = String(date.getMonth() +1 )
    //accesing current year
    let year = String(date.getFullYear())
    return `${day},${month},${year}`
  }
  console.log(showDate())//printing DD,MM,YY