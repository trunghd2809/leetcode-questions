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
const maxLevelSum = function(root) {
  const queue = [];
  let maxObj = { max: Number.NEGATIVE_INFINITY, level: 0 };
  let i = 0;

  const levelOrder = (root) => {
    queue.push(root);
    while(queue.length != 0) {
      i++;
      let size = queue.length;
      let total = 0;

      for (let i = 0; i < size; i++) {
        let n = queue.shift();
        total += n.val;
        n.left && queue.push(n.left);
        n.right && queue.push(n.right);
      }

      if (total > maxObj.max) {
        maxObj.max =  total;
        maxObj.level = i;
      }
    }
  }

  levelOrder(root);

  return maxObj.level;
};