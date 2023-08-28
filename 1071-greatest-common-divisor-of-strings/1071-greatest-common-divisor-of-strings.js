/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 != str2 + str1) return '';
  const isValid = (sub, str) => {
    if (str.length === 0) return true;
    if (!str.startsWith(sub)) return false;
    return isValid(sub, str.slice(sub.length));
  }

  let res = '';
  for (let i = 1; i <= str1.length; i++) {
    const sub = str1.slice(0, i);
    if (isValid(sub, str1) && isValid(sub, str2)) res = sub; 
  }
  return res;
};