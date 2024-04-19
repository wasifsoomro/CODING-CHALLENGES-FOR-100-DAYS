//137
  //use try-catch block to handle 
  try{
    //Intentionally cause an error
    throw new Error("Something went wrong")
  }catch (error: any) {
    console.log(error.message)//print error message
  } //This code tries to execute a block, that throws an error and catch block handles the error gracefully 
  