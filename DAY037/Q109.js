//109
//create a function that console good morning if time is less than 12 pm
function getHour() {
    let date = new Date();
    let currentHour = date.getHours();
    if (currentHour < 12) {
        console.log("Good Morning");
    }
}
getHour(); //Invoking function
export {};
