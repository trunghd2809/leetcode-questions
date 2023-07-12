/**
 * Sorted array with duplicate element
 * Find index of last duplicate element and print this element
 * If not print message 'No duplicate found'
 * Input : arr[] = {1, 5, 5, 6, 6, 7}
 * Last index: 4, Last duplicate item: 6
 */

/**
 * 
 * @param {*} nums 
 * @returns {}
 * @time complexity O(n) -> best case
 * @space complexity O(1) -> best case
 */
const findLastDuplicate = (nums) => {
  let duplicate = {};
  for (let i = 0; i < nums.length - 1; i ++) {
    if (nums[i] === nums[i + 1]) {
      duplicate = { index: i + 1, value: nums[i + 1] }
    }
  }
  return duplicate;
}
console.log(findLastDuplicate([1, 2, 3, 4, 5]));

/**
 * 
 * @param {*} nums 
 * @returns {}
 * @time complexity O(n) -> worth case
 * @space complexity O(1) -> best case
 */
const findLastDuplicateOptimize = (nums) => {
  for (let i = nums.length - 1; i > 0; i --) {
    if (nums[i] === nums[i - 1]) {
      return { index: i, value: nums[i] }
    }
  }
  return {};
}
console.log(findLastDuplicateOptimize([1, 5, 5, 6, 6, 7]));