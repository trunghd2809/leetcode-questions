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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
  let map = {};
  let count = 0;

  const preOrder = (node, pathSum) => {
    if (node === null) return;

    pathSum += node.val;
    
    if (pathSum === targetSum) count++;
    
    if (map[pathSum - targetSum]) count += map[pathSum - targetSum];
    
    if (map[pathSum]) map[pathSum]++;
		else map[pathSum] = 1;
    
    preOrder(node.left, pathSum);
    preOrder(node.right, pathSum);

    map[pathSum]--;
  }
  preOrder(root, 0);

  return count;
};