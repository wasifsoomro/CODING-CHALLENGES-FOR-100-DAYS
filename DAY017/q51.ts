//simpple function that calculate area of rectangle
function rectangle(width:number, hight: number){
    return width * hight
}

//Refactored into arrow array 
let arrowFuncction = (width:number, hight: number)=>{
    return width* hight
}
//print the area of rectangel using arrowfunction 
console.log(arrowFuncction(10, 5));