/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false
*/

const oneAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneEditInsert(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return oneEditInsert(str2, str1);
  } else {
    return false;
  }

  // Checks the values at each index while taking into account str length
  function oneEditInsert(s1, s2) {
    let index1 = 0;
    let index2 = 0;

    while (s2.length > index2) {
      if (s1[index1] !== s2[index2]) {
        if (index1 !== index2) {
          return false;
        }
        index2++;
      }
      index1++;
      index2++;
    }
    return true;
  }

  // Checks the amount of replacements with the strings
  function oneEditReplace(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        console.log(s1[i], s2[i]);
        count++;
      }
    }
    return count <= 1;
  }
};
