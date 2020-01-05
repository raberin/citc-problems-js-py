/** Class representing a Linked List */

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }
  /*
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }
  /*
   * Deletes a node
   * @param {*} node - the node to remove
   * @return {*} value - the deleted node's value
   */
  remove(node) {
    let currentNode = this.head;

    // Loop through until before node to remove
    while (currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    // Save deletedNode, and replace its next value
    let deletedNode = currentNode.next;
    currentNode.next = currentNode.next.next;

    return deletedNode.value;
  }
  /*
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  // {
  //   head: {value: 1, next: {value: 2, next: null}}
  //   tail: {value: 2, next: null}
  // }
  removeTail() {
    let currentNode = this.head;
    // Go through linkedlist all the way before tail
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    // Sets the previous tail as null and makes currentNode the tail
    currentNode.next = null;
    this.tail = currentNode;
  }
  /*
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode.value === value;
  }
  /*
   * Checks if a node is the head of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  isHead(node) {
    return node === this.head;
  }
  /*
   * Checks if a node is the tail of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  isTail(node) {
    return node === this.tail;
  }
  isValues() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

module.exports = {
  LinkedList
};
