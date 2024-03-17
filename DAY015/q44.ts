//create function with rest parameter that takes unlimited arguments
function sandwich(...item: string[]){
    console.log(`Making a sandwich with these ingreadients ${item.join(',')}`)
}
//invoking function by passing arguments depend on my need
sandwich("Chicken", "Bacon", "Tomatoes", "Lettuce", "Mayonese", "Cheese")
sandwich("Cheese", "Tomatoes", "Bassil leeaves", "Olive oil", "Balsamic Glaves")
sandwich("Avacado", "Sprouts", "Mustard", "Mayo")
