/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
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