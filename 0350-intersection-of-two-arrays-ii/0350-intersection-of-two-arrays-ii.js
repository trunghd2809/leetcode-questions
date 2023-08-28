/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  let map = {};
  let result = [];
   nums1.forEach((item) => {
    map[item] = map[item] ? map[item] + 1 : 1;
   });

   nums2.forEach((item) => {
    if (map[item] >= 1) {
      result.push(item);
      map[item] -= 1;
    }
   })

   return result;
};