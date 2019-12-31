// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = string => {
  let result = {};
  for (char of string) {
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
