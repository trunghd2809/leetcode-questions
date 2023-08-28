/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let n = A.length;
    let increase = true;
    if (n < 3) return false;
    for (let i = 0; i + 1 < n; i++) {
        let j = i + 1;
        if (A[i] < A[j]) {
            if (!increase) return false;
        } else if (A[i] > A[j]) {
            if (increase) {
                if (i === 0 ) return false;
                increase = false;
            }
        } else {
            return false;
        }
    }
    if (increase == false) return true;
    return false;
};