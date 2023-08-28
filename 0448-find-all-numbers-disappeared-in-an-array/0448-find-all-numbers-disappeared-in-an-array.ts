function findDisappearedNumbers(nums: number[]): number[] {
  const existed = [];
  const missed = [];

  for (let num of nums) {
      existed[num] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
      if (existed[i] !== true) {
          missed.push(i);
      }
  }

  return missed;
};