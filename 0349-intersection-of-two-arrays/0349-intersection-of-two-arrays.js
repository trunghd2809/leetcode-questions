/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = {};
  let result = [];
   nums1.forEach((item) => {
    if (!map.hasOwnProperty(item)) map[item] = 0;
   });

   nums2.forEach((item) => {
    if (map[item] == 0) {
      result.push(item);
      map[item] = 1;
    }
   })

   return result;
};