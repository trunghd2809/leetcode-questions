/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let soHang = grid.length;
  let soCot = grid[0].length;
  let daDuyet = Array(300).fill(false).map(() => Array(300).fill(false));
  let count =  0;
  var isValid = function(i, j) {
    return i >= 0 && i < soHang && j >= 0 && j < soCot;
  };
    
  var DFS = function(grid, i, j) {
    // B1 Dieu kien dung || Bai toan co so
    if (isValid(i, j) === false) return; 
    if (grid[i][j] === '0' || daDuyet[i][j] === true) return;

    // Danh dau da duyet
    daDuyet[i][j] = true;

    // B2 De Quy || Cong thuc truy hoi
    DFS(grid, i + 1, j);
    DFS(grid, i - 1, j);
    DFS(grid, i, j + 1);
    DFS(grid, i, j - 1);

  };

  for (let i = 0; i < soHang; i++) {
    for (let j = 0; j < soCot; j++) {
      if (grid[i][j] === '1' && daDuyet[i][j] === false) {
        DFS(grid, i, j);
        count++;
      }
    }
  };

  return count;
};