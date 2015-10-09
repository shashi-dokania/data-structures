var Stack = function() {
  this.storage = {};
  this.length = 0; 
};

  Stack.prototype.size = function(){
    return this.length;
  };

  Stack.prototype.push = function(value){
    this.length++;
    this.storage[this.length] = value; 
  };

  Stack.prototype.pop = function(){
    var result;
    if(this.length > 0){
      result = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
    }
    return result;
  };
  var stack = new Stack();



