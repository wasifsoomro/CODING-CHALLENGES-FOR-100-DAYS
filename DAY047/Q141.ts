//141
//using await reserved word in asynchronous JavaScript 
//create a asynchronous function
async function fetchData(){
    //now we create a promise using await it pauses a code untill promise done. it resumes with resolved value
    let data = await fetchData();
    console.log(data) 
  }
  console.log("We use await with asynchronous behavior to make a promise and pauses all the code execution untill promise done")
  fetchData()