/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"
*/

const URLify = str => {
  //Trim removes the whitespace before and after string for the trailing spaces
  let strArr = str.trim().split("");
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === " ") {
      strArr[i] = "%20";
    }
  }
  return strArr.join("");
};

console.log(URLify("Hello my name is  ")); //'Hello%20my%20name%20is'
