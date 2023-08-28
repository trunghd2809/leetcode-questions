/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  let maximizedSum = 0;
  for (let i = 0; i <= sorted.length - 2; i+=2) {
    maximizedSum += sorted[i];
  }
  return maximizedSum;
};