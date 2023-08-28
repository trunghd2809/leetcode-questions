function isPalindrome(x: number): boolean {
    const backward = +x.toString().split('').reverse().join('');
    return x === backward;
};