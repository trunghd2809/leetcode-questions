/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let maxProfit = 0;
  let n = prices.length;
  for (let i = 0; i < n - 1;) {
    let k = i + 1;
    while (k < n) {
      if (prices[k] - prices[i] > maxProfit) {
        maxProfit = prices[k] - prices[i];
        k++;
      } else if (prices[k] - prices[i] <= 0){
        i++;k = i + 1
      } else {
        k++;
      }
    }
    i++; k= i + 1;
  }
  return maxProfit;
};