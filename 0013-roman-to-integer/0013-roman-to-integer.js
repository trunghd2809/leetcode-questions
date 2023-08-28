/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const roman = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000], ['IV', 4], ['IX', 9], ['XL', 40], ['XC', 90], ['CD', 400], ['CM', 900] ]);
  let result = 0, i = 0; // TODO: Need to fix it
  const sChars = Array.from(s);
  while (i < sChars.length) {
    if (roman.has(sChars[i]+sChars[i+ 1])) {
      result += roman.get(sChars[i]+sChars[i+ 1]);
      i += 2;
    } else {
      result += roman.get(sChars[i]);
      i += 1;
    }
  }
  return result;
};