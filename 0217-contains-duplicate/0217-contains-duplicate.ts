function containsDuplicate(nums: number[]): boolean {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) return true;
    hashMap.set(nums[i], 1);
  }
  return false;
};