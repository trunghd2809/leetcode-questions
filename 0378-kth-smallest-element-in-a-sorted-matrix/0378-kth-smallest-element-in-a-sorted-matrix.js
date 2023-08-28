class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  add(value) {
    // Insert value to the end of the array to ensure the heap condition
    this.heap.push(value);
    // Heapify up
    this.heapifyUp();
  }

  poll() {
    if (this.heap.length <= 0) throw new Error('Heap is empty');

    const min = this.peek();
    // Swap between the root node and the last item of the array and remove the last item from the array
    const index = this.heap.length - 1;
    const element = this.heap[index];
    this.heap[0] = element;
    this.heap.pop();

    // Heapify down
    this.heapifyDown();
    // Return the min value
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;

      // Swap between element and parent value
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    let min = index;
    const n = this.heap.length;

    while (index < n) {
      const element = this.heap[index];

      const left = 2 * index + 1;
      const right = left + 1;

      if ((left < n && this.heap[left] < element) || (right < n && this.heap[right] < element)) {
        if (right < n) {
          min = this.heap[left] < this.heap[right] ? left : right;
        } else {
          min = left;
        }
      }

      if (index === min) break;
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }

  // print heap
  print() {
    console.log(this.heap);
  }
}

const kthSmallest = (matrix, k) => {
  const n = matrix.length;
  const minHeap = new MinHeap();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      minHeap.add(matrix[i][j]);
    }
  }

  let result = null;
  for (let i = 0; i < k; i++) {
    result = minHeap.poll();
  }

  return result;
};
