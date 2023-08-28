/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
  const stack = [];

  // traversal string s and push them into stack ignore ']'
  for (const str of s) {
    if (str !== ']') {
      stack.push(str); continue;
    }
    // When it meets ']' then
    let current = stack.pop();
    let string = '';
    // Put all character in string until meet '['
    while(current != '[') {
      string = current + string;
      current = stack.pop();
    }

    let times = '';
    current = stack.pop();
    // Find times to repeat and repeat it then push back it to stack
    while(!Number.isNaN(Number(current))) {
      times = current + times;
      current = stack.pop();
    }
    stack.push(current);
    stack.push(string.repeat(Number(times)));

    // Loop all process before
  }

  return stack.join('');
};
//console.log(decodeString('3[ba2[c]e]dk')); 100[leetcode]