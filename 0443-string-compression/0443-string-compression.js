/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  let prev = chars[0];
  let count = 1;
  let idx = 0;

  for (let i = 1; i < chars.length; i++) {
    if (prev === chars[i]) {
      count++;
    } else {
      chars[idx] = prev;
      idx++;

      if (count > 1) {
        count.toString().split('').forEach((c) => {
          chars[idx] = c;
          idx++;
        })
      }

      prev = chars[i]; count = 1;
    }
  }

  chars[idx] = prev;
  idx++;
  if (count > 1) {
    count.toString().split('').forEach((c) => {
      chars[idx] = c;
      idx++;
    })
  }
  console.log(chars);

  return idx;
};