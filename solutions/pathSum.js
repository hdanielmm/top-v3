

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

function TreeNode(value) {
  this.value = value;
  this.right = undefined;
  this.left = undefined;
}

var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};
