/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
  const array = [...score];
  const sortedScore = array.sort((a, b) => b-a);

  for (let i = 0; i < score.length; i++) {
    const elementIndex = binarySearch(sortedScore, score[i]);
    const place = elementIndex + 1;
    if (place === 1) {
      score[i] = 'Gold Medal';
    } else if (place === 2) {
      score[i] = 'Silver Medal';
    } else if (place === 3) {
      score[i] = 'Bronze Medal';
    } else {
      score[i] = place.toString();
    }
  }
  return score;
};

const binarySearch = (nums, target) => {
  const n = nums.length;
  let iLeft = 0;
  let iRight = n - 1;

  while (iLeft <= iRight) {
    let iMid = Math.floor((iLeft + iRight) / 2);
    if (target === nums[iMid]) {
      return iMid;
    } else if (target > nums[iMid]) {
      iRight = iMid - 1;
    } else iLeft = iMid + 1;
  }

  return -1;
}