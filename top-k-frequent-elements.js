/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time Complexity: O(n) + O(k log k) = O(n + k log k)
 */

const topKFrequent = (nums, k) => {
  // create map store value and concurrences
  const map = new Map();

  for(let i = 0; i < nums.length; i++) { // O(n)
    if (map.has(nums[i])) {
      const v = map.get(nums[i]);
      map.set(nums[i], v + 1);
    } else {
      map.set(nums[i], 0);
    }
  }

  // Use heap to store k elements
  const heap = [];
  [...map.entries()].forEach(([key, value], index) => { // O(n)
    if (index < k) {
      heap[index] = { item: key, priority: value };
    } else {
      heap.sort((a, b) => b.priority - a.priority); // TimSort O(k log k))
      if (value > heap[k-1].priority) {
        heap[k-1] = { item: key, priority: value };
        heap.sort((a, b) => b.priority - a.priority);
      }
    }
  });

  // return array of most k frequent elements
  return heap.slice(0, k).map((i) => i.item);
};

topKFrequent([5,3,1,1,1,3,73,1], 2)

