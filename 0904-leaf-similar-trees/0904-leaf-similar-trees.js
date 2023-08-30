/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  const inOrder = (node, arr) => {
    if (node === null) return;

    inOrder(node.left, arr);
    inOrder(node.right, arr);

    !node.left && !node.right && arr.push(node.val);
  }

  inOrder(root1, arr1);
  inOrder(root2, arr2);

  return arr1.toString() === arr2.toString();
};