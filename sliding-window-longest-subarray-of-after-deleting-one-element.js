/**
 * @param {number[]} nums
 * @return {number}
 */
// draft and check leetcode done all case
const longestSubarrayPrev = function(nums) {
  let start = 0, end = 0;
  let deleteEl = 0;
  let max = 0, count = 0;
  let isNotZero = true;

  while(end < nums.length) {
    if (!nums[end]) {
      deleteEl++; isNotZero = false;
      if (deleteEl > 1) {
        while(true) {
          if (!nums[start]) {
            start++; deleteEl--;
            break;
          } else {
            start++; count--;
          }
        }
      }
    } else {
      count++;
    }
    end++;
    max = Math.max(max, count);
  }
  return isNotZero ? max - 1 : max;
};
// optimize unnecessary variables
// Idea is the sliding window only 1 zero

const longestSubarray = (nums) => {
  let start = 0, maxCount = 0, zeroCount = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;

    while(zeroCount > 1) {
      if (nums[start] === 0) {
        zeroCount--;
      }
      start++;
    }

    maxCount = Math.max(maxCount, end - start);
  }

  return maxCount;
}
console.log(longestSubarray([1,1,0,0,1,1,1,0,1]));