//create type with two shapes circle or rectangle
type Shape = {
    Kind: "Circle" | "Rectangle";
    radius?: number; //ths we use in circle
    width?: number; //this we use in rectangle
    height?: number //this we use in height
}

//create a circle passing shape type
let circle: Shape = {
    Kind: "Circle",
    radius: 5, 
}

//create a rectangle passing shape type
let rectangle: Shape = {
    Kind: "Rectangle",
    width: 30,
    height: 10
}
console.log(circle, "\n", rectangle) //now we print both circle and rectangle

