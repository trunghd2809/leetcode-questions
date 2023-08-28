/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function(grid) {
  const map = new Map();
  let count = 0;

  for (const row of grid) {
    map.set(row.toString(), (map.get(row.toString()) || 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    let j = 0;
    let col = [];
    while(j < grid.length) {
      col.push(grid[j][i]);
      j++;
    }

    if (map.has(col.toString())) count += map.get(col.toString());
  }

  return count;
};
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))
//grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]] -> 3