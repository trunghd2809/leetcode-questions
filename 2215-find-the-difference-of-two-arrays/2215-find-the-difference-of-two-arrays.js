/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
  const map = new Set();
  const cache = new Set();
  const result = [[], []];

  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) map.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!map.has(nums2[i]) && !cache.has(nums2[i])) {
      result[1].push(nums2[i]);
    } else {
      cache.add(nums2[i]);
      map.delete(nums2[i]);;
    }
  }

  result[0] = Array.from(map);
  return result;
};

console.log(findDifference([1,2,3], [2,4,6,2,2,7]));
/**
 * Input: nums1 = [1,2,3], nums2 = [2,4,6]
  Output: [[1,3],[4,6]]
 */