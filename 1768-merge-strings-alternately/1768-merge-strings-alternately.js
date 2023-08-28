/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  const w1 = word1.split('');
  const w2 = word2.split('');
  const n = Math.max(w1.length,w2.length);

  let mergedString = '';
  for (let i = 0; i < n; i++) {
    mergedString += `${w1[i] || ''}${w2[i] || ''}`
  }
  return mergedString;
};