/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  const gSorted = g.sort((a, b) => a - b);
  const sSorted = s.sort((a, b) => a - b);

  let i = g.length - 1;
  let j = s.length - 1;
  let count = 0;

  while (i >= 0 && j >=0) {
    if (sSorted[j] >= gSorted[i]) {
      j--;i--;
      count++;
    } else i--;
  }
  return count;
};