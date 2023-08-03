/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
  let currentAverage = 0;

  // step 1: Initialize pointers and calculate initial sum
  for (let i = 0; i < k; i++) {
    currentAverage += nums[i];
  }

  let maxAverage = currentAverage;
  // Step 2: Sliding window and finding max

  for (let right = k; right < nums.length; right++) {
    // Expanding the window by adding the next element
    currentAverage += nums[right];

    // Contracting the window from the left by removing the leftmost element
    currentAverage -= nums[right - k];

    // update max
    maxAverage = Math.max(maxAverage, currentAverage);
  }

  return maxAverage / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))