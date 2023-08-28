/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  const total = nums.reduce((acc, next) => acc + next, 0);
  let totalLeft = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalLeft === total - totalLeft - nums[i]) return i;
    totalLeft += nums[i];
  }

  return -1;
}