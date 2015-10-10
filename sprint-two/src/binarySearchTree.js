// function node(value){
//   this.value = value;
//   this.left = null;
//   this.right = null;
// };

var BinarySearchTree = function(value) {
  
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  binarySearchTree.insert = function(value) {

    if (value < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
          this.left.insert(value);
        }
    } else {
        if (!this.right) {
          this.right = BinarySearchTree(value);
        } else {
            this.right.insert(value);
          }
      }
  };

  binarySearchTree.contains = function(value) {
    
    if (this.value === value) {
      return true;
    }

    if (!this.right && !this.left) {
    return false;
    }

    if (this.value < value) {
      return this.right.contains(value);
    } else {
      return this.left.contains(value);
    }
    return false;

  };

  binarySearchTree.depthFirstLog = function(callback) {
    if(this.value){
      callback(this.value);
    }
    if(this.left) {
      this.left.depthFirstLog(callback);
    }
    if(this.right) {
      this.right.depthFirstLog(callback);
    }
  };

  return binarySearchTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
