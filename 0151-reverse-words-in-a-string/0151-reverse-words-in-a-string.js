/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const arr = s.trim().replaceAll(/\s{1,}/gm, ' ').split(' ');
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let tem =  arr[right];
    arr[right] = arr[left];
    arr[left] = tem;
    right -= 1; left += 1;
  }
  
  return arr.join(' ');
};