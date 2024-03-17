
//creating a function with default value
function describe_city(city: string, country = "Pakistan"){
    console.log(`${city} is in ${country}`)
  }
  describe_city("Karachi")//passing city that prints with default value
  describe_city("NaushahroFeroze")//now passing other city name that prints with default value
  describe_city("Madina", "Saudi Arabia")//Passing another city name with modifying default value