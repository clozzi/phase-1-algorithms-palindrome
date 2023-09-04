function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  console.log(reversedWord);
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Write a function that takes in a string and compares it to a reversed version of itself.

  input: string
  output: T/F
  
  split string elements into array
  reverse array of string elements
  join reversed elements of string
  if (reversed elements === original elements) return true
  else return false

*/

/*
  Add written explanation of your solution here
  Function takes in the input string, reverses it and converts it into a string to then compare whether it is the same string as the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("radar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("charlie"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
