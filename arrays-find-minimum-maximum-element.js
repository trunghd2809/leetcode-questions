/**
 * @param {number[]} nums
 * @return {object{min, max}}
 * const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
 */

/**
 * 
 * !Time complexity O(n) 
 * !Space complexity 0(1)
 */
const findMinMax = (nums) => {
  let min = nums[0]; // 0(1)
  let max = nums[0]; // 0(1)

  for (let i = 1 ; i < nums.length; i++) { // O(n -1) -> O(n)
    if (min > nums[i]) min = nums[i]; // 0(1)
    if (max < nums[i]) max = nums[i]; // O(1)

    return { min, max }; // 0(1)
  }
}

console.log(findMinMax([1, 423, 6, 46, 34, 23, 13, 53, 4]))