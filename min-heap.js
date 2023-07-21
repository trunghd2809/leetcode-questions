/**
 * HEAP = Binary Tree (almost complete) + Condition (heap property)
 * Heap Property
 * - Max-Heap: Node parent >= Node child
 * - Min-Heap: Node Parent <= Node child
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    if (this.heap.length <=0 ) throw new Error('Heap is empty');
    return this.heap[0];
  }

  add(value) {
    // Insert value to end of array to ensure heap condition
    this.heap.push(value);
    // Heapify up
    this.heapifyUp();
  }

  poll() {
    if (this.heap.length <=0 ) throw new Error('Heap is empty');

    const min = this.peek();
    // swap between root node and item of the end of array and remove last item if the array
    const index = this.heap.length - 1;
    const element = this.heap[index];
    this.heap[0] = element;
    this.heap.pop();

    // heapify down
    this.heapifyDown();
    // return min
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index];
      const parentIndex = Math.floor(index / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;
      
      // swap between element and parent value
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    let min = index;
    const n = this.heap.length - 1;
    
    while(index < n) {
      const element = this.heap[index];

      const left = 2 * index + 1;
      const right = left + 1;
      
      if ((left < n && this.heap[left] < element) || ((right < n) && this.heap[right] < element)) {
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

const minHeap = new MinHeap();
minHeap.add(0);
minHeap.add(1);
minHeap.add(3);
minHeap.add(4);
minHeap.add(6);
minHeap.add(8);
minHeap.add(7);
minHeap.peek();
minHeap.poll();;
minHeap.print();


class HeapItem {
  constructor(item, priority = item) {
      this.item = item;
      this.priority = priority;
  }
}

class MinHeap {
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

      if (parent.priority <= element.priority) break;
      // if the parent is bigger than the child then swap the parent and child
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  pop() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return min;
  }

  bubble_down() {
    let index = 0;
    let min = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;
      // check if left or right child is smaller than parent
      if ((left < n && this.heap[left].priority < this.heap[min].priority) ||
      (right < n && this.heap[right].priority < this.heap[min].priority)) {
          // pick the smaller child if both child is present
          if (right < n) {
              min = this.heap[left].priority < this.heap[right].priority ? left : right;
          } else {
              min = left;
          }
      }

      if (min === index) break;
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}