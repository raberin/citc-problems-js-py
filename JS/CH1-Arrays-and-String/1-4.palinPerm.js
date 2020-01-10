/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
*/

//Set Method - O(n)
const palinPerm = str => {
  let loweredStr = str.toLowerCase();
  let unpairedChars = new Set();

  //Add letters into set while disregarding spaces
  //Unique characters will stay in set while palindrome chars will be deleted
  for (let char of loweredStr) {
    if (char === " ") {
      continue;
    } else if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char.toLowerCase());
    }
  }
  //Checks the amount of unique characters in set
  //Accounting for odd length of palindromes
  return unpairedChars.size <= 1;
};

//Caching Method - O(n)
const palinPerm = str => {
  let loweredStr = str.toLowerCase();
  let hash = {};

  //Loop through disregarding spaces
  //Count the amount of letters in str
  for (let char of loweredStr) {
    if (char === " ") {
      continue;
    } else if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  //Retrieve values from hash and filter out even numbers
  let filteredHash = Object.values(hash).filter(num => num % 2 !== 0);
  console.log(filteredHash);

  //if length of unique chars is <= 1 return true otherwise false
  return filteredHash.length <= 1;
};

console.log(palinPerm("Tact Coa")); //True
console.log(palinPerm("ivicc")); //True
console.log(palinPerm("ivic")); //False
