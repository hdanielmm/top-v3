// # Search Tree
//
// [Guías de Make it Real](https://guias.makeitreal.camp/algoritmos/estructuras-de-datos#ejercicio)
//
// Van a implementar:
//
// * `add`
// * `traverseDFS`

function Node(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

function BinaryTree() {
  this.root = null;

  this.add = function add(value) {
    var node = new Node(value);
    if(this.root === null) {
      this.root = node;
    } else {
      searchTree(this.root, node);
    }
  }

  this.inverse = function() {
    if(this.root) {
      inverseTree(this.root);
    }
  }

  this.traverseDFS = function(fn) {
    if(this.root) {
      printNode(this.root, fn);
    }
    return;
  }


}
///// Recursive functions /////
function inverseTree(node) {
  var aux = null;
  console.log(node.value);

  if (node.left || node.right) {
    aux = node.left;
    node.left = node.right;
    node.right = aux;
    if(node.left) {
      inverseTree(node.left);
    }
    if(node.right) {
      inverseTree(node.right);
    }
  }
}

function printNode(node, fn) {
  fn(node.value);
  if(node.left) {
    printNode(node.left, fn);
  }
  if(node.right) {
    printNode(node.right, fn);
  }
}

function searchTree(root, node) {
  if (node.value < root.value) {
    if (!root.left) {
      root.left = node;
    } else {
      searchTree(root.left, node);
    }
  } else {
    if (!root.right) {
      root.right = node;
    } else {
      searchTree(root.right, node);
    }
  }
}

// Test
const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(3);
tree.add(5);
tree.add(1);

console.log("---------- traverseDFS ----------");
tree.traverseDFS(function(e) { console.log(e); });
// 4
// 2
// 1
// 3
// 7
// 5

console.log("---------- inverse ----------");
console.log(tree.inverse());
// 4
// 7
// 5
// 2
// 3
// 1
