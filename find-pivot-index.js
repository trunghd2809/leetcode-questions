/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex1 = (nums) => {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const calculate = (start, end, isLeft) => {
      let result = 0;
      if ([-1, length].includes(start)) return result;
      const start1 = isLeft ? end : start;
      const end1= isLeft ? start : end
      for (let index = start1; index <= end1; index++) {
        result += nums[index];
      }
      return result;
    }

    let sumOfLeft = calculate(i - 1, 0 , true);
    let sumOfRight = calculate(i + 1, length - 1, false);
    if (sumOfLeft === sumOfRight) return i;
  }
  return -1;
};
// Improve to increase performance
const pivotIndex = (nums) => {
  const total = nums.reduce((acc, next) => acc + next, 0);
  let totalLeft = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalLeft === total - totalLeft - nums[i]) return i;
    totalLeft += nums[i];
  }

  return -1;
}