/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// normal way but O(n2)
const moveZeroes = function(nums) {
  let k  = 0;
  let n = nums.length;

  for (let i = 0; i < n;) {
    if (nums[i] === 0 && i <= (n - 1 - k)) {
      let pointer = i;
      while (pointer < n - k - 1) {
        nums[pointer] = nums[pointer + 1];
        pointer++;
      }
      nums[pointer] = 0;
      k++;
    } else i++;
  }
  console.log(nums);
};
// console.log(moveZeroes([1,0,1]))
// optimize this code using two pointer
const moveZeroesO = function(nums) {
  let i = 0;
  let j = 1;

  while (j <= nums.length - 1) {
    if (nums[i] === 0) {
      if (nums[i] != nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++; j++;
      } else {
        j++;
      }
    } else {
      i++;j++;
    }
  }
  console.log(nums);
}

console.log(moveZeroesO([0,1,0,3,12]))