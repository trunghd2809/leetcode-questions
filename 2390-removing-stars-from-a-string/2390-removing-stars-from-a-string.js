/**
 * @param {string} s
 * @return {string}
 */
/** Time Limit Exceeded */
const removeStarsOld = function(s) {
  let pointer = 0;
  let arr = s.split('');

  while (pointer < arr.length) {
    if (arr[pointer] !== '*') pointer++;
    else {
      if (pointer - 1 < 0) break;
      arr.splice(pointer - 1, 2);
      pointer -= 2;
    }
  }

  return arr.join('');
};

/** Improve performance */
/** Using stack to store */
const removeStars = function(s) {
  let stack = [];

  for (const el of s) {
    if (el !== '*') stack.push(el);
    else stack.pop();  
  }

  return stack.join('');
};
console.log(removeStars('leet**cod*e'));