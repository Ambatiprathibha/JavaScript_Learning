//check palindrome
const scan = require("prompt-sync")();
let str = scan("Enter a string: ");
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
const inputString = str;
if (isPalindrome(inputString)) {
  console.log(`${inputString} is a palindrome.`);
} else {
  console.log(`${inputString} is not a palindrome.`);
}
