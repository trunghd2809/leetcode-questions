/**
 * @param {number} n
 * @return {number}
 */
var f = [];
var fib = function(n) {
  if (f[n]) return f[n];
  if (n == 1) return 1;
  if (n == 0) return 0;
  console.log('Dang xu ly ' + n);
  f[n] = fib(n-1) + fib(n-2);
  return f[n];
};