//123
  //create function that checks vowel
  function checkVowel(str: string){
    let vowel = "AEIOUaeiou" //store vowels
  for(const char of str ){ //use for of loop
    if(vowel.includes(char)){ //create statement that checks charcter include in word or not
      console.log("First Vowel Found in word")
      break; //break a loop if first vowel found and print all the charcter that are palced before vowel
    }
    console.log(char)
  }
  }
  checkVowel("Wasif")
