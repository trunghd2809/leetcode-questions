/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  const n = s.length - 1;
  for (let i = 0; i <= n / 2; i++) {
    let tem = s[i];
    s[i] = s[n - i];
    s[n - i] = tem;
  }
}