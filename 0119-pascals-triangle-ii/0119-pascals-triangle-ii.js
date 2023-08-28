/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1,1];
  let triangle = [[1], [1,1]];
  for(let i = 2; i <= rowIndex; i++) {
    let previous = triangle[i - 1];
    let current = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i ) {
        current[j] = 1;
      } else {
        current[j] = previous[j - 1] + previous[j];
      }
    }
    triangle[i] = current;
  }
  return triangle[rowIndex];
};