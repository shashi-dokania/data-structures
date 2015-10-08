var Stack = function() {

  var stack = Object.create(stackMethods);

  stack.storage = {};
  stack.length = 0;
  //console.log(stack);
  return stack;
};
var stackMethods = {};

stackMethods = {

  size: function(){
    return this.length;
  },

  push: function(value){
    this.length++;
    this.storage[this.length] = value;
    
  },

  pop: function(){
    var result;
    if(this.length > 0){
      result = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
    }
    return result;
  }
};
//console.log(stackMethods);


