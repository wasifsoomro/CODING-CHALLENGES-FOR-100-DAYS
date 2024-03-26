//70
function withLoop() {
    //create a loop inside a loop
    for (let i = 1; i <= 5; i++) {
      console.log(i) //now access loop 
    }
    //if i access (i) here it shows error because it outside the scope and it also define with let
  }
  console.log(withLoop()) //But this prevents to show error where we can not used i outside the scope