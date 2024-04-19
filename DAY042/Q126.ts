
  
  //126
  let checksThisBehaviour = {
    name: "Muhammad Wasif",
    age: 19,
    getAge: function() {
      console.log(this.age) //It access the property as I expected
      
      let nestedFunction = () => { 
        console.log(this.name) //I can also acess property using arrow function using this it acess property from outside scope but simple function can not access property 
      }
      nestedFunction()
    }
  }
  checksThisBehaviour.getAge() //print a object value that i return in methods using this