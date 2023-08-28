/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  let max = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (max < candies[i]) max = candies[i];
  }
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max)
      result[i] = true;
    else
      result[i] = false;
  }
  return result;
};