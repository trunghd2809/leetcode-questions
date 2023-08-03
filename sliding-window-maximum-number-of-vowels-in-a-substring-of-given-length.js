/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Time out with k= 50436
const maxVowels1 = function(s, k) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  let left = 0;
  let right = left + k;
  let max = 0;

  while (right <= s.length) {
    const calculate = function (sub) {
      let len = 0;
      for (const s of sub) {
        if (vowel.includes(s)) len++;
      }
      return len;
    }
    max =  Math.max(calculate(s.slice(left, right)), max);
    left++;right++;
  }

  return max;
};
// Improve using sliding window
const maxVowels = (s, k) => {
  const isVowels = (s) => {
    if(s == 'a'|| s == 'e' || s == 'i' || s=='o' || s == 'u')
    {
      return true;
    }
    return false;
  }
  // step 1: Initialize pointers and calculate initial max
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (isVowels(s[i])) count++;
  }
  let max = count;
  // step 2: Sliding window and find max
  for (let right = k; right < s.length; right++) {
    if (isVowels(s[right])) count++;
    if (isVowels(s[right - k])) count--;
    max = Math.max(max, count);
  }
  return max;
}
console.log(maxVowels('abciiidef', 3));