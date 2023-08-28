/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let n = digits.length;
  if (digits[n -1] !== 9) {
    digits[n - 1] = digits[n - 1] + 1;
  } else {
    let k = n - 1;
    while (digits[k] === 9) {
      digits[k] = 0;
      k--;
    }
    if (k >=0) {
      digits[k] = digits[k] + 1;
    } else {
      digits[k + 1] = digits[k + 1] + 1;
      while ( k + 2 < n + 1) {
        digits[k + 2] = 0;k++;
      }
    }
    
  }
  return digits;
};