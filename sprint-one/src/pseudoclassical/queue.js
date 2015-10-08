var Queue = function(storage, length) {
  this.storage = {};
  this.length = 0; 
};

Queue.prototype.size = function(){
    return this.length;
  };

  Queue.prototype.enqueue = function(value){
    this.storage[this.length] = value;
    this.length++; 
  };

  Queue.prototype.dequeue = function(){
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
  };
  var stack = new Stack(storage, length);


