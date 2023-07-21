/**
 * points = [{xi, yi}] and integer K
 * return k closest points to the origin (0, 0).
 * distance = √(x1 - x2)2 + (y1 - y2)2)
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 *  * Time Complexity: O(n) + O(k log k) = O(n + k log k)
 */
const kClosest = (points, k) => {
  // create map to store distance and index of point
  const map = new Map();
  for (let i = 0; i < points.length; i++) {
    const distance = Math.sqrt(Math.pow((points[i][0] - 0), 2) + Math.pow((points[i][1] - 0), 2));
    map.set(i, distance);
  }  

  // create min-heap store distance follow k
  const heap = [];
  [...map.entries()].forEach(([key, value], index) => { // O(n)
    if (index < k) {
      heap[index] = { item: key, priority: value };
    } else {
      heap.sort((a, b) => a.priority - b.priority); // TimSort O(k log k))
      if (value < heap[k-1].priority) {
        heap[k-1] = { item: key, priority: value };
        heap.sort((a, b) => b.priority - a.priority);
      }
    }
  });
  return heap.slice(0, k).map((i) => points[i.item]);
};

console.log(kClosest([[1,3],[-2,2]], 1));