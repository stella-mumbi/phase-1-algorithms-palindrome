

  // Write your algorithm here


/* 
  algorithmic problem solving

  example

  ------------

  Input: "madam"
Output: true

Input: "robot"
Output: false

pseudocode


------
function (str)
if  letters spell same forwards and backwards -> true

  else return false iterate through every letter to confirm the condition.

  if the data type != string return "only strings allowed"

  no empty strings--no spaces


 store characters in a variable


*/

/*
This a problem solving algorithm that helps you output true if  the string is a palindrome that is it will read  the same afterwards or backwards like `"mom"` or `"racecar".It should return false if this is not met
*/

// You can run `node index.js` to view these console logs


  
function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");

  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
let word = "Alessia";
console.log(isPalindrome(word));
// isPalindrome(Alessia)


if (require.main === module) {
// add your own custom tests in here
console.log("true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


