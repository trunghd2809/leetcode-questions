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

function postorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  postorder(root, result);
  return result;
};

function postorder(root: TreeNode, result: number[]): void {
  if (root === null) return;

  
  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.val);
}