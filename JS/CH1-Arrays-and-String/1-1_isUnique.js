// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Brute Force O(n^2)
const isUnique = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// Optimized O(n)
const isUnique = str => {
  let result = {};
  for (char of str) {
    if (result[char] === undefined) {
      result[char] = 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isUnique("abcdefghijk")); //True
console.log(isUnique("aassdd")); //False
