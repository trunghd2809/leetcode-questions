/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var currentIndex = 0;
    var n = nums.length;
    for (var i = 0; i <= n - 1; i++) {
        if (nums[currentIndex] !== nums[i]) {
            currentIndex = currentIndex + 1;
            nums[currentIndex] = nums[i];
        }
    }
    return currentIndex + 1;
};