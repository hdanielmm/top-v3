// # Search BST
//
// Add a method called `search` on the `BinaryTree` that receives un number and
// returns true if the number is on the tree, false otherwise.

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;

  this.add = function(value) {
    var node = new TreeNode(value)
    if(!this.root) {
      this.root = node;
      console.log(this.root.value);
    } else if(node.value > this.root.value) {
      this.root.left = node;
      console.log(node.value);
    } else {
      this.root.right = node;
    }
  }
}

// javascript
const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);

// tree.search(7); // true
// tree.search(10); // false
// ```
