/**
 * Give array[] with size = n - 1, range [1, n]
 * Find missing number
 * No duplicate number
 * Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
 * Output: 5
 */
/**
 * 
 * @param {*} nums 
 * @param {*} N
 * 
 * Use hashmap to store 
 * Time complexity O(n)
 */
const findMissingNumber = (nums, N) => {
  const target = N + 1;
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const tem = target - nums[i];
    if (hashmap.hasOwnProperty(tem)) {
      delete hashmap[tem];
    } else {
      hashmap[nums[i]] = nums[i];
    }
  }

  return target - Object.values(hashmap)[0];
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8))