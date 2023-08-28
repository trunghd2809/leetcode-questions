/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let i = 0;
  let j = 1;

  while (j <= nums.length - 1) {
    if (nums[i] === 0) {
      if (nums[i] != nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++; j++;
      } else {
        j++;
      }
    } else {
      i++;j++;
    }
  }
}