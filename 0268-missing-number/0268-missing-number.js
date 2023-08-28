/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for(let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};