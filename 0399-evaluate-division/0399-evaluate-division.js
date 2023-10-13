/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
  /* Build graph */
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [n1, n2] = equations[i];
    if (!(n1 in graph)) graph[n1] = [];
    if (!(n2 in graph)) graph[n2] = [];
    
    graph[n1].push([n2, values[i]]);
    graph[n2].push([n1, parseFloat(1/values[i])]);
  }
  // console.log(graph);
  
  /* Evaluate for u,v of queries*/
  const results = [];
  for (let query of queries) {
    // traversal path from u to v in graph
    const dfs = (graph, src, dest) => {
      const stack = [[src, 1]];
      const visisted = new Set();
      
      while (stack.length > 0) {
        const [node, product] = stack.pop();
        
        if (!graph[node]) return -1;
        if (node === dest) return product;
        if (visisted.has(node)) continue;
        visisted.add(node);

        for(let [nei, wt] of graph[node]) {
          stack.push([nei, wt * product])
        }
      }
      
      return -1;
    }
    const result = dfs(graph, query[0], query[1]);
    results.push(result);
  }
  
  return results;
};