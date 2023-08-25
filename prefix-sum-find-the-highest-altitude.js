/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  let prefixSum = [];
  prefixSum[0] = 0;
  let largest = prefixSum[0];

  for (let i = 0; i < gain.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + gain[i];
    largest = Math.max(prefixSum[i + 1], largest);
  }

  return largest;
};
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))
// -> [0,-4,-7,-9,-10,-6,-3,-1]