/**
 * *Sorted array arr = []
 * *Two integers k and x
 * *Return k closest integers to x in array
 * !Condition: |a-x| < |b-x| or |a-x| === |b-x| and a < b
 */

// const findClosestElements1 = (arr, k, x) => {
//   // create map to store result of condition
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++ ) {
//     map.set(i, { item: arr[i], math: Math.abs(arr[i] - x) });
//   }

//   // create heap with k length and store result of condition
//   const heap = [];
//   [...map.entries()].forEach(([key, value], index) => { // O(n)
//     if (index < k) {
//       heap[index] = { index: key, priority: value.math, item: value.item };
//       heap.sort((a, b) => a.priority - b.priority);
//     } else {
//       if (heap[k - 1].priority > value.math) {
//         heap[k-1] = { index: key, priority: value.math, item: value.item };
//       } else if (heap[k - 1].priority == value.math && heap[k -1].item > value.item) {
//         heap[k-1] = { index: key, priority: value.math, item: value.item };
//       }
//       heap.sort((a, b) => a.priority - b.priority);
//     }
//   });

//   return heap.sort((a, b) => a.index - b.index).map((i) => i.item)
// }
//* -> optimize from about code to this code because Time Limit Exceeded
const findClosestElements = (arr, k, x) => {
  const heap = [];
  let sorted = false;

  for (let i = 0; i < arr.length; i++ ) { // O(n)
    const distance =  Math.abs(arr[i] - x);

    if (i < k) {
      heap[i] = { index: i, priority: distance, item: arr[i] };
    } else {
      if (!sorted) {
        heap.sort((a, b) => a.priority - b.priority); // O(k log(k))
        sorted = true;
      }
      if (heap[k - 1].priority > distance) {
        heap[k-1] = { index: i, priority: distance, item: arr[i] };
      } else if (heap[k - 1].priority == distance && heap[k -1].item > arr[i]) {
        heap[k-1] = { index: i, priority: distance, item: arr[i] };
      }
      heap.sort((a, b) => a.priority - b.priority); // O(k log(k))
    }
  }
  return heap.sort((a, b) => a.index - b.index).map((i) => i.item)
}
// Time complexity O((n-k) * k * log(k)) ~ O(k^2 * log(k))
console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8], 3, 5))