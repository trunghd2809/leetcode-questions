/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const arr = [nums[0]];

  for (let i = 1; i< nums.length; i++) {
    arr[i] = arr[i - 1] * nums[i];
  }
  let productVal = 1;
  for (let i = nums.length - 1; i >= 0 ; i--) {
    arr[i] = i === 0 ? productVal : arr[i - 1] * productVal;
    productVal *= nums[i];
  }

  return arr;
};