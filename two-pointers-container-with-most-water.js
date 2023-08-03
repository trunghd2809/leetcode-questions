/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    const left = height[i];
    const right = height[j];
    const width = j - i;
    const maxStore = Math.min(left, right) * width;
    max = Math.max(max, maxStore);
    Math.min(left, right) == left ? i++ : j--;
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))