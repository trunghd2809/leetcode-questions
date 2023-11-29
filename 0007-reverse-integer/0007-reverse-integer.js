/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const checkNumber = (x) => x > 0;
  const isOutsideRange = (value) => value < -Math.pow(2, 31) || value > Math.pow(2, 31) - 1;

  if (isOutsideRange(x)) return 0;

  let isNegative = false;
  if (!checkNumber(x)) {
    x = Math.abs(x);
    isNegative = true;
  };
  x = x.toString().split('');

  let i = 0;
  let j = x.length - 1;
  while (i < j) {
    let tem = x[i];
    x[i++] = x[j];
    x[j--] = tem;
  }
  
  let number = isNegative ? `-${x.join('')}` : x.join('');
  if (isOutsideRange(number)) return 0;
  return number;
};