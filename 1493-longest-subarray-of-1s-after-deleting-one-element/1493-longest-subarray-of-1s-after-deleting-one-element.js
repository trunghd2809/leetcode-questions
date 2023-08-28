/**
 * @param {number[]} nums
 * @return {number}
 */
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