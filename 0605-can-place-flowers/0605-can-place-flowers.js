/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let numberOfFlowers = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;
    if (numberOfFlowers == 0) return true;
  
    if (i === 0 && (flowerbed[i + 1] === 0 || flowerbed[i + 1] == undefined)) {
      numberOfFlowers -= 1;
      flowerbed[i] = 1;
    }
    if (i === flowerbed.length - 1 && flowerbed[flowerbed.length - 2] === 0) {
      numberOfFlowers -= 1;
      flowerbed[i] = 1;
    }
    if (flowerbed[i - 1] === 0 && flowerbed[i + 1] ===0) {
      numberOfFlowers -= 1;
      flowerbed[i] = 1;
    }
  }
  return numberOfFlowers === 0;
};