class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    // insert the new node at the end of the heap array
    this.heap.push(node);
    // find the correct position for the new node
    this.bubble_up();
  }

  bubble_up() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent.priority >= element.priority) break; // The only change is here: >= instead of <=
      // if the parent is smaller than the child then swap the parent and child
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  pop() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return max;
  }

  bubble_down() {
    let index = 0;
    let max = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;
      // check if left or right child is greater than parent
      if (
        (left < n && this.heap[left].priority > this.heap[max].priority) ||
        (right < n && this.heap[right].priority > this.heap[max].priority)
      ) {
        // pick the greater child if both children are present
        if (right < n) {
          max = this.heap[left].priority > this.heap[right].priority ? left : right;
        } else {
          max = left;
        }
      }

      if (max === index) break;
      [this.heap[max], this.heap[index]] = [this.heap[index], this.heap[max]];
      index = max;
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
