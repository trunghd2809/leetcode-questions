function findMedianSortedArrays(a: number[], b: number[]): number {
  let n = a.length;
  let m = b.length;
  let k = (m + n) - 1;
  
  let i = n - 1;
  let j = m - 1;
  while (k >= 0) {
    if (i < 0) {
      a[k] = b[j];
      j--;
    } else if (j < 0) {
      a[k] = a[i];
      i--;
    } else if (a[i] <= b[j]) {
      a[k] = b[j]; j--;
    } else if (a[i] > b[j]) {
      a[k] = a[i]; i--;
    }
    k--;
  }
  console.log(a);
  let mid = 0;
  if (a.length === 1) {
    return  mid = a[0];
  } else if (a.length % 2 === 0) {
    let index = Math.floor((a.length -1) / 2);
    return mid = (a[index] + a[index + 1]) /2;
  } else {
    let index = Math.floor((a.length -1 ) / 2);
    return mid = a[index];
  }
};