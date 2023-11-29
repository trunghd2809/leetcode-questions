/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  
  let substring = [s[0]];
  let pointer = 1;
  let max = 0;
  
  while (pointer < s.length) {
    const checkDuplicate = (array, char) => {
      const index = array.findIndex((c) => c == char);
      return index;
    }
    let foundIndex = checkDuplicate(substring, s[pointer]);
    if (foundIndex >= 0) {
      substring = [...substring.slice(foundIndex + 1)];
    }
    substring.push(s[pointer]);
    // console.log(substring);
    max = Math.max(max, substring.length);
    pointer++;
  }
  
  return max;
};