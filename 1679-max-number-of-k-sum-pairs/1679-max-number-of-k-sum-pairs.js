/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
  let count = 0;
  let hashmap = new Map();

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > k) continue;
    if (hashmap.has(nums[i]) && hashmap.get(nums[i]) > 0) {
      count++;
      hashmap.set(nums[i],  hashmap.get(nums[i]) - 1);
    } else {
      const tem = k - nums[i];
      if (hashmap.get(tem)) {
        hashmap.set(tem, hashmap.get(tem) + 1);
      } else {
        hashmap.set(tem, 1);
      }
    }
  }

  return count;
};