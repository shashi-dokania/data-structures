var Graph = function() {
  
  this.nodes = {};

};

Graph.prototype.addNode = function(node) {

  this.nodes[node] = this.nodes[node] || { edges: {} };

};

Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (this.nodes.hasOwnProperty(node)) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    if (this.nodes.hasOwnProperty(node)) {
      delete this.nodes[node];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edges[toNode]) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
  
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  if (this.nodes[fromNode].edges[toNode]) {
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
};

Graph.prototype.forEachNode = function(callback) {
  for (var key in this.nodes) {
    callback(key);
  }
};
var graph = new Graph();
