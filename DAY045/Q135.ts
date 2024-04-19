//135
  //reuse person1 object from question 133
  let person1 = {
    name: "Muhammad Wasif",
    age: 19
  }
  //use json.stringfy method that convert object into json string 2 represents the whitespaces between strings
  
  let jsonString = JSON.stringify(person1, null, 2)
  console.log(jsonString) //this is the output of above code
  /*
  {
    "name": "Muhammad Wasif",
    "age": 19
  }
  */