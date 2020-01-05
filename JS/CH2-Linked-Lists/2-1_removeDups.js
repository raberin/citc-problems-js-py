const { LinkedList } = require("./linked-list.js");

/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? Hints: #9, #40
*/

const removeDups = list => {
  // Store each nodes value
  const map = {};

  let currentNode = list.head;
  let prevNode = currentNode;
  while (currentNode.next !== null) {
    // If in cache remove node, otherwise create in cache
    if (map[currentNode.value]) {
      prevNode.next = currentNode.next;
    } else {
      map[currentNode.value] = true;
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return list;
};

let mySuperList = new LinkedList(1);
mySuperList.insert(1);
mySuperList.insert(12);
mySuperList.insert(1);
mySuperList.insert(10);
mySuperList.insert(10);
mySuperList.insert(12);
console.log(mySuperList);
console.log(mySuperList.isValues()); // [ 1, 1, 12, 1, 10, 10, 12 ]
console.log(removeDups(mySuperList));
console.log(mySuperList.isValues()); // [ 1, 12, 10, 12 ]
