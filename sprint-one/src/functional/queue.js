var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var result;
    var temp = Object.keys(storage).length - 1;
    for(var key in storage){
      if(+key < temp){
        temp = key;
      }
    }

    if(size > 0){
      result = storage[temp];
      delete storage[temp];
      size--;
    }

    for(var key in storage) {
      storage[+key - 1] = storage[key];
    }
    return result;    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
