/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// const minReorder = function(n, connections) {
//   // Define edges
//   let edges = 0;
//   // Build graph as adjacency list
//   const graph = Array(n).fill(0).map(() => []);
//   connections.forEach(([city1, city2]) => {
//     graph[city1].push(city2);
//     graph[city2].push(city1);
//   })
  
//   // traversal nodes using stack
//   let stack = [];
//   let visisted = new Set();
//   for (let i = 0; i < graph.length; i++) {
//     if (!visisted.has(i)) {
//       stack.push(i);
//       visisted.add(i);
      
//        while (stack.length > 0) {
//          const current = stack.pop();
//          const road =  graph[current];
         
//          for (let j = 0; j <road.length; j++) {
//           if (!visisted.has(road[j])) {
//             // add to stack
//             stack.push(road[j]);
//             visisted.add(road[j]);
//             // check in connections
//             const target = [current, road[j]];
//             const targetExists = connections.some(connection => {
//               return connection[0] === target[0] && connection[1] === target[1]; 
//             });
//             if (!!targetExists) edges++;
//           }
//         }
//        } // end while condition
      
//     } // end if condition
    
//   } // end loop
  
//   return edges;
// };

// Improve performance

const minReorder = function(n, connections) {
  // Define edges
  let edges = 0;
  // Build graph as adjacency list
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  connections.forEach(([city1, city2]) => {
    graph[city1].push(city2);
    graph[city2].push(city1);
  })
  // Build edges
  const edgesSet = new Set(connections.map(c => c.join('-')));

  // traversal nodes using stack
  let stack = [];
  let visisted = new Set();
  
  stack.push(0);
  visisted.add(0);
  
   while (stack.length > 0) {
     const current = stack.pop();
     
     for (let neighbor of graph[current.toString()]) {
      if (!visisted.has(neighbor)) {
        // add to stack
        stack.push(neighbor);
        visisted.add(neighbor);
        // check in connections
        if (edgesSet.has(current + '-' + neighbor)) {
          edges++; 
        }
      }
    }
   } // end while condition
  
  return edges;
};