function sortArrayByParity(a: number[]): number[] {
  let k = 0;
  let n = a.length;
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
      let tem = a[i];
      let tem1 = a[k];
      a[k] = tem;
      a[i] = tem1;
      k++;
    }
  }
  return a;
};