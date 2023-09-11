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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else { 
    /** 
     * * Find the node to be deleted
     */
    /**
     * * Case 1: If the node to be deleted has no children, simply delete the node
     */
    if (root.left === null && root.right === null)
      return null;
    /** 
     * * Case 2: If the node to be deleted has one child, replace the node with its child
     */
    if (root.left === null && root.right != null)
      return root.right;
    /** 
     * * Case 3: If the node to be deleted has one child, replace the node with its child
     */
    if (root.right === null && root.left != null)
      return root.left;
    /** 
     * * Case 4: If the node to be deleted has two children, find the inorder successor of the node to be deleted
    */
   let leftMode = findLeftNode(root.right);
   root.val = leftMode.val;
   root.right = deleteNode(root.right, leftMode.val);

   return root
  }
  return root;
};

const findLeftNode = function(root) {
  if (root === null) return null;
  let leftMode = root;
  while (leftMode.left) {
    leftMode = leftMode.left;
  }
  return leftMode;
}