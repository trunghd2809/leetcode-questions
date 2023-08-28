function firstUniqChar(s: string): number {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], false);
    } else {
      hashMap.set(s[i], i);
    }
  }
  for (let [key, value] of hashMap) {
    if (value !== false) {
      return value;
    }
  }
  return -1;
};