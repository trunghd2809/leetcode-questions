function removeElement(nums: number[], val: number): number {
 let n = nums.length;

  for (let i = 0; i < n; ) {
    if (nums[i] === val) {
      // remove element from array
      for (let j = i; j <= n - 2; j++) {
        nums[j] = nums[j + 1];
      }

      n--;
    } else {
      i++;
    }
  }
  return n;
};