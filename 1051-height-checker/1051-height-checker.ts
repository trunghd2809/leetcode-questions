function heightChecker(a: number[]): number {
  let n = a.length;
  let b = [...a];
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] > a[j]) {
        let tem = a[j];
        a[j] = a[i];
        a[i] = tem;
      }
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (a[i] != b[i]) {
      count++;
    }
  }
  return count;
};