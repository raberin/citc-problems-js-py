/* 
Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
EXAMPLE
lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks likea->b->d->e- >f
*/

// Bad Way - Loops through and changes the values of all nodes after
const deleteMid = node => {
  let currentNode = node;
  while (currentNode.next) {
    // if 2nd to last, remove tail and set current to tails value
    if (!currentNode.next.next) {
      currentNode.value = currentNode.next.value;
      currentNode.next = null;
    } else {
      currentNode.value = currentNode.next.value;
      currentNode = currentNode.next;
    }
  }
};

// Better Way = No loops
const deleteMid = node => {
  let currentNode = node;
  if (!currentNode.next) {
    return "this is the tail cant delete";
  }
  // Grab next nodes value and set next to the node after
  currentNode.value = currentNode.next.value;
  currentNode.next = currentNode.next.next;
};

let mySuperList = new LinkedList("a");
mySuperList.insert("b");
mySuperList.insert("c");
mySuperList.insert("d");
mySuperList.insert("e");
mySuperList.insert("f");
console.log(mySuperList.isValues()); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
let currentNode = mySuperList.head;
currentNode = currentNode.next;
currentNode = currentNode.next;
deleteMid(currentNode);

console.log(mySuperList.isValues()); //  [ 'a', 'b', 'd', 'e', 'f' ]
