const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addNode(this.head, data);
      function addNode(node, data) {
        if (!node) {
          return new Node(data);
        }
        if (node.data === data) {
          return node;
        }
        if (data < node.data) {
          node.left = addNode(node.left, data);
        } else {
          node.right = addNode(node.right, data);
        }
        return node;
      }
  }

  has(data) {
    return hasValue(this.head, data);
    function hasValue(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      return data < node.data ? 
          hasValue(node.left, data) : 
          hasValue(node.right, data);
    }
  }

  find(data) {
    if(this.head === null) {
      return false;
    }
    let node = this.head;
    let found = true;
    while(found) {
      if(!node) {
        return null;
      } if(data === node.data) {
        return node;
      } if(data < node.data) {
        node = node.left;
      } if(data > node.data) {
        node = node.right;
      }
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);
      function removeNode(node, data) {
        if (!node) {
          return null;
        }
        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }
          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;
          node.right = removeNode(node.right, minFromRight.data);
          return node;
        }
      }      
    }

  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};