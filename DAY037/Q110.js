//110
//Create a function that returns a grading on the bases of numbers you have got
function givenGrades(num) {
    if (num > 480 && num <= 600) {
        console.log("Congratulation you have gotten A Grade");
    }
    else if (num > 400 && num <= 480) {
        console.log("Congratulation you have gotten B Grade");
    }
    else if (num > 350 && num <= 400) {
        console.log("Congratulation you have gotten C Grade");
    }
    else if (num > 300 && num <= 350) {
        console.log("Congratulation you have gotten D Grade");
    }
    else if (num > 250 && num <= 300) {
        console.log("Congratulation you have gotten E Grade");
    }
    else if (num > 200 && num <= 250) {
        console.log("Congratulation you have gotten F Grade");
    }
    else {
        console.log("You are Fail");
    }
    return num;
}
givenGrades(250); //invoking function with passing argument 
export {};
