/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= firstSmallest) {
      firstSmallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }
  return false;
};

console.log(increasingTriplet([1,2,3,4,5]));