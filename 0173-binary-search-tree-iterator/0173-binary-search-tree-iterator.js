/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function(root) {
  const inorderTraversal = function(root) {
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  };
  this.stack = [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  this.current = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.current >= this.stack.length) return null;
  const val = this.stack[this.current++];
  return val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.current < this.stack.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */