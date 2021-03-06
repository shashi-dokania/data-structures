var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};

  _.extend(stack, queueMethods);
  return stack;
};

var queueMethods = {
  
  size: function(){
    return this.length;
  },

  enqueue: function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue: function(){
    var result;
    var first = Object.keys(this.storage)[0];

    if(this.length > 0){
      result = this.storage[first];
      delete this.storage[first];
      this.length--;
    }
    for(var key in this.storage){
      this.storage[+key - 1] = this.storage[key];
    }
    return result;
  }
};


