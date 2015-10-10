

var HashTable = function() {
  this.limit = 8;
  //this.storage = LimitedArray(this.limit);
  this.storage = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  
  if(this.storage[index] === undefined) {
    this.storage[index] = ([[k, v]]);  
  } else {
    var inserted = false;
    for(var i = 0; i < this.storage[index].length; i++){
      if(this.storage[index][i][0] === k){
        this.storage[index][i][1] = v;
        inserted = true;
      }
    }
    if(inserted === false) {
      this.storage[index].push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  
  for(var i = 0; i < this.storage[index].length; i++){
    if(this.storage[index][i][0] === k){
      return this.storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  for(var i = 0; i < this.storage[index].length; i++){
    if(this.storage[index][i][0] === k){
      this.storage[index][i][1] = null;
    }
  } 
};

var hashTable = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 */


