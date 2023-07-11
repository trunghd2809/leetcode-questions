/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 
 * nums = [2,7,11,15], target = 9
 * return [0, 1]
 */

/**
 * ! use hashmap to solve problem
 * ! Time complexity O(n)
 * ! Space complexity 0(n) - worst case
 */ 
const twoSum = (nums, target) => {
 const hashmap = {}; // 0(1)

  for (let i = 0; i < nums.length; i++) { // O(n)
    const tem = target - nums[i]; // O(1)
   
    if (hashmap.hasOwnProperty(tem)) { // O(1)
      return [hashmap[tem], i]; // O(1)
    } else {
      hashmap[nums[i]] = i; // O(1)
    }
  }
  return []; // O (1)
};

console.log(twoSum([2,7,11,15], 9));