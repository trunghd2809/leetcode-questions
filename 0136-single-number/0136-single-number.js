/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let k = 0, count = 0;
    while (k < nums.length) {
      if (k === i) k++;
      if (count > 0) break;
      if (nums[i] === nums[k]) {
        count++;
      }
      k++;
    }
    if (count === 0) return nums[i];
  }
};