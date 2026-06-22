//check count of vowels and consonants
const scan = require("prompt-sync")();
let str = scan("Enter a string: ");
function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantsCount++;
    }
  }
  return { vowels: vowelsCount, consonants: consonantsCount };
}

const { vowels, consonants } = countVowelsAndConsonants(str);
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
