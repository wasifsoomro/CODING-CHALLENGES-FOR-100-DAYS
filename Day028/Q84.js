//84
//create a function that replace Javascript into Typescript
function replaceJavascriptintoTypescript(str) {
    //create a variable apply replace method using regular expression with 'g' flag for global replacement
    return str.replace(/Javascript/g, "Typescript");
}
console.log(replaceJavascriptintoTypescript("I love Javascript and Javascript is awesome")); //printing a value with replaced value
export {};
