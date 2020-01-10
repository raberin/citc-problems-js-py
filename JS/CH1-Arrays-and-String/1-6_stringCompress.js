/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

*/

// Count each letter (Caching)
// concat the letter:count to a result string
// Return the str with the shorter length

const stringCompress = str => {
  let compressed = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;

    // Check if letter affter current letter isnt the same
    // If not, append to compressed and restart count
    if (str[i] !== str[i + 1]) {
      compressed += `${str[i]}${count}`;
      count = 0;
    }
  }
  return str.length > compressed.length ? compressed : str;
};

console.log(stringCompress("aabcccccaaa")); // a2b1c5a3
