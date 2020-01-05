// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

const kthLast = (k, list) => {
  let listLength = 0;
  let currentNode = list.head;
  // Get total length of List
  while (currentNode !== null) {
    listLength++;
    currentNode = currentNode.next;
  }

  // Calculate how many steps before end of list
  let kLast = listLength - k;
  let counter = 0;
  currentNode = list.head;
  while (currentNode !== null) {
    if (counter === kLast) {
      return currentNode.value;
    }
    counter++;
    currentNode = currentNode.next;
  }
  return undefined;
};

let mySuperList = new LinkedList(1);
mySuperList.insert(1);
mySuperList.insert(2);
mySuperList.insert(3);
mySuperList.insert(4);
mySuperList.insert(5);
mySuperList.insert(6);
console.log(mySuperList.isValues()); // [1,2,3,4,5,6]
console.log(kthLast(3, mySuperList)); // 4
console.log(kthLast(2, mySuperList)); // 5
console.log(kthLast(1, mySuperList)); // 6
