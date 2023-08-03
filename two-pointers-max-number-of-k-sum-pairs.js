/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * O(n) 95ms
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
console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3));

// [2,1,1,1,2,1,2,2,2,2]