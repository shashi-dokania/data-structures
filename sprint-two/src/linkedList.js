var LinkedList = function() {
  
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!this.head) {
      this.head = node;
      //list.head = {value: value, next: null}
    }

    if (this.tail) {
      this.tail.next = node;
      //list.tail = {value: value, next: {value: value, next: null}};
    }
    this.tail = node;
    //list.tail = {value: value, next: null}
  };


  list.removeHead = function() {
    var currentNode = this.head;
    //current node = {{value: value, next: null}}
    this.head = this.head.next;
    //this.head = null;
    return currentNode.value;
  };

  list.contains = function(target) {
    var currentHead = this.head;
    while (currentHead) {
      if (currentHead.value === target) {
        return true;
      }
      currentHead = currentHead.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail : O(1) - constant
 */

