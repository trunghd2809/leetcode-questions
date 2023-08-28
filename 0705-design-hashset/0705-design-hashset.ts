class MyHashSet {
  private SIZE: number = 1000;
  private myBuckets: Array<Array<number>>;

  constructor() {
    this.myBuckets = new Array(this.SIZE);
    for (let i = 0; i < this.myBuckets.length; i++) {
      this.myBuckets[i] = new Array<number>();
    }
  }

  add(key: number): void {
    let hashValueIndex = this.hashFunction(key);
    let bucket = this.myBuckets[hashValueIndex];
    let index = bucket.indexOf(key);
    if (index < 0) { bucket.push(key) }
  }

  remove(key: number): void {
    let hashValueIndex = this.hashFunction(key);
    let bucket = this.myBuckets[hashValueIndex];
    let index = bucket.indexOf(key);
  
    if (index > -1) {
      bucket = [...bucket.slice(0, index), ...bucket.slice(index + 1)];
      this.myBuckets[hashValueIndex] = bucket;
    }
  }

  contains(key: number): boolean {
    let hashValueIndex = this.hashFunction(key);
    let bucket = this.myBuckets[hashValueIndex];
    let index = bucket.indexOf(key);
    if (index > -1) return true;
    return false;
  }

  private hashFunction(key: number): number {
    return key % 1000;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */