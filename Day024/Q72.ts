//72
//Block Scope with let const 
{
    let checkWithLet = "let in inside block";
    console.log(checkWithLet); //This worls
    const checkwithConst = "const in inside block";
    console.log(checkwithConst); //This works
  }
  try {
    // console.log(checkWithLet);// this can not works because i access outside the block sope
  } catch (error) {
    console.log("'check with let' can not accessible outside the block");
  }
  try {
    // console.log(checkwithConst);// this can not works because i access outside the block sope
  } catch (error) {
    console.log("'check with Const' can not accessible outside the block");
  }