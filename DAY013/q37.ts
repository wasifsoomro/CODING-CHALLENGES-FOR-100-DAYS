//Creating function and passs two parameters with default value
function makeshirt(size = "Large" , message = "I love typescript"){
    console.log(`Shirt size is ${size} and this message "${message}" must print on it`)
 }
 makeshirt() //print withh default value
 makeshirt("Medium")// print with modifying size of shirt
 makeshirt("small", "I love Generative AI")// print with modifying size and message