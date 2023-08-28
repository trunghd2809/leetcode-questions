/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1,1]];
  let nums = [[1], [1,1]];
  for (let i = 2; i < numRows; i++) {
    let previous = nums[i - 1];
    let current = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i ) {
        current[j] = 1;
      } else {
        current[j] = previous[j - 1] + previous[j];
      }
    }
    nums[i] = current;
  }
  return nums;
};