/**
 * @param {string} s
 * @return {string}
 * Using two pointer algorithm to reduce time complexity
 */
const reverseVowels = function(s) {
  let arr = s.split('');
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  let leftPointer = 0;
  let rightPointer =  s.length - 1;

  while (leftPointer <= rightPointer) {
    if (vowels.includes(arr[leftPointer]) && vowels.includes(arr[rightPointer])) {
      let tem = arr[rightPointer];
      arr[rightPointer] = arr[leftPointer];
      arr[leftPointer] = tem;
      leftPointer++;
      rightPointer--;
    } else if (!vowels.includes(arr[leftPointer]) && !vowels.includes(arr[rightPointer])) {
      leftPointer++;
      rightPointer--;
    } else if (!vowels.includes(arr[leftPointer])) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return arr.join('');
};
console.log(reverseVowels('leetcode'));