/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const map = new Map();
  const set = new Set();
  let result = true;

  for (const item of arr) {
    if (map.has(item))
      map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  }

  map.forEach((value) => {
    if (set.has(value)) result = false;
    set.add(value);
  })
  
  return result;
};
console.log(uniqueOccurrences([1,2]));