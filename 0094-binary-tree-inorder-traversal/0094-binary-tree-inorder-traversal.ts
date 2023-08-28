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

function inorderTraversal(root: TreeNode | null): number[] {
  let arr : number[] = [];
  iLR(root, arr);
  return arr;
};

function iLR(root: TreeNode | null, arr: number[]) {
// B1 Dieu kien dung
  if (root === null) return root; 

  iLR(root.left, arr);
  arr.push(root.val);
  iLR(root.right, arr);
}