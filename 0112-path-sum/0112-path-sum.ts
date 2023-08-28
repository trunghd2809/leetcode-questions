/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let current = 0;
  return sum(root, targetSum, current);
};

function sum(root: TreeNode, targetSum: number, current: number): boolean {
  if (root === null) return false;

  if (root.left === null && root.right === null) {
    if (targetSum === current + root.val) {
      return true
    }
  } else {
    current += root.val;
  }
  return sum(root.left, targetSum, current) || sum(root.right, targetSum, current);
}