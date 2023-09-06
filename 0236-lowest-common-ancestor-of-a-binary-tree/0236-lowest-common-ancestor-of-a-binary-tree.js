/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  const dfs = (node, p, q) => {
    if (!node) return null;
    // console.log(node.val);

    const left = dfs(node.left, p, q);
    const right = dfs(node.right, p, q);

    if (node == p || node == q) return node;
    // console.log('left', left);
    // console.log('right', right);
    if (left && right) return node;

    return left ? left : right;
  }

  return dfs(root, p, q);
};