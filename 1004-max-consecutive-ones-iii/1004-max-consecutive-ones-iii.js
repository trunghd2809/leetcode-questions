/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) {
  let count = 0;
  const flip = k;
  let pointer = 0;

  // step 1: Initialize pointers and calculate initial max
  for (let i = 0; i < flip; i++) {
    if (nums[i] === 0) {
      k--; count++;
    } else count++;
  }

  let max = count;
  // step 2: calculate max
  for (let right = flip; right < nums.length; right++) {
    if (nums[right] === 1) {
      count++;
    } else {
      if (k === 0) {
        right = pointer; // because right++ in end of condition for loop
        pointer++;
        k = flip; count = 0;
      } else {
        k--; count++;
      }
    }
    max = Math.max(max, count);
  }
  return max;
};