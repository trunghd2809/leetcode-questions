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
 * @return {number}
 */
const goodNodes = function(root) {
  let count = 0;

  const preOrder = (node, max) => {
    if (node === null) return;

    if (node.val >= max) {
      count++;
      max = node.val;
    }
    preOrder(node.left, max);
    preOrder(node.right, max);
  }
  preOrder(root, root.val);

  return count;
};