/*
Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other.
*/

// Partially Optimized Sorting O(nlogn)
// Must join the arr back to str since primitive values they're not objects
const checkPermutation = (str1, str2) => {
  // First check if strings are of same length
  if (str1.length !== str2.length) {
    return false;
  } else {
    //Split str to arr, sort, join back together
    sortedStr1 = str1
      .split("")
      .sort()
      .join("");
    sortedStr2 = str2
      .split("")
      .sort()
      .join("");
    return sortedStr1 === sortedStr2;
  }
};

// Tests
console.log(checkPermutation("aba", "aab")); //True

console.log(checkPermutation("aba", "aaba")); //False

console.log(checkPermutation("aba", "aa")); //False
