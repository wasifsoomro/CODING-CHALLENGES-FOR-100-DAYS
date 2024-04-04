//93
//create a function with one parametr
function replacingElement(arr:string[]){
    //find a index a particular element
    let findIndex = arr.indexOf("Orange")
    if(findIndex !== -1 ){
      arr[findIndex] = "Mango"//replacing that particular element with an other
    }
    return arr//return updated array
  }
  //create a array with three favourite fruite. 
  let arr:string[] = ["Apple", "Orange", "Watermelon"]
  
  console.log(replacingElement(arr))//print updated array