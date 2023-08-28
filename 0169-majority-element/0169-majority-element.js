/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let map = {};
  nums.forEach((item) => {
    map[item] = map[item] ? map[item] + 1 : 1;
  })
  for (const [key, value] of Object.entries(map)) {
    if (value > nums.length / 2)  return key;
  }
  return -1;
};