/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(n1: number[], m: number, n2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = (m + n) - 1;
  
  while ( k >= 0 ) {
    if (i < 0) {
      n1[k] = n2[j];
      j--;
    } else if (j < 0) {
      n1[k] = n1[i];
      i--;
    } else if (n2[j] >= n1[i]) {
      n1[k] = n2[j];
      j--;
    } else if (n2[j] < n1[i]) {
      n1[k] = n1[i];
      i--;
    }
    k--;
  }
};