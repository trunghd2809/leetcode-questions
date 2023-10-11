/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = (M) => {
  if (M.length == 0) return M.length;

  let stack = [];
  let visisted = new Set();
  let provinces = 0;
  
  for (let i = 0; i < M.length; i++) {
    if (!visisted.has(i)) {
      stack.push(i);
      visisted.add(i);
    
      while (stack.length > 0) {
        const current = stack.pop();

        for (let j = 0; j < M[current].length; j++) {
          if (M[current][j] === 1 && !visisted.has(j)) {
            stack.push(j);
            visisted.add(j);
          }
        }
      }
      
      provinces++; 
    }
  }
  
  return provinces;
}