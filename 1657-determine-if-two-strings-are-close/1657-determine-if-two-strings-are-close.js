/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;

  const charFreq1 = new Map();
  const charFreq2 = new Map();

  for (const char of word1) {
    charFreq1.set(char, (charFreq1.get(char) || 0) + 1);
  }

  for (const char of word2) {
    charFreq2.set(char, (charFreq2.get(char) || 0) + 1);
  }

  const freqArray1 = [...charFreq1.values()].sort((a, b) => a - b);
  const freqArray2 = [...charFreq2.values()].sort((a, b) => a - b);

  const charArray1 = [...charFreq1.keys()].sort();
  const charArray2 = [...charFreq2.keys()].sort();

  return arraysAreEqual(freqArray1, freqArray2) && arraysAreEqual(charArray1, charArray2);
};

const arraysAreEqual = (arrA, arrB) => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};

console.log(closeStrings('aaabbbbccddeeeeefffff', 'aaaaabbcccdddeeeeffff')); // Output should be false

//word1 = "cabbba", word2 = "abbccc"