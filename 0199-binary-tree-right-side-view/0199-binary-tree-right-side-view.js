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
 * @return {number[]}
 */
const rightSideView = function(root) {
  const queue = [];
  const rightSide = [];
  if (root === null) return rightSide;
  
  const levelOrder = (root) => {
    queue.push(root);
    while(queue.length != 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let n = queue.shift();
        if (i === size - 1) rightSide.push(n.val);
        n.left && queue.push(n.left);
        n.right && queue.push(n.right);
      }
    }
  }

  levelOrder(root);
  return rightSide;
};