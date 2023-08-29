const RecentCounter = function() {
   this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  if (t > t - 3000 ) this.queue.push(t);

  while(t-3000 > this.queue[0]) {
    this.queue.shift();
  }
  
  return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */