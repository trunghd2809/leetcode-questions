/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = (arr) => {
  const n = arr.length;
  const iLeft = 0;
  const iRight = n - 1;
  return recursion(arr, iLeft, iRight);
}

const recursion = (arr, iLeft, iRight) => {
  if (iLeft > iRight) return -1;
  const iMid = Math.floor((iLeft + iRight) / 2);
  if (arr[iMid - 1] < arr[iMid] && arr[iMid] > arr[iMid + 1]) {
    return iMid;
  } else if (arr[iMid - 1] > arr[iMid]) {
    return recursion(arr, iLeft, iMid);
  } else  {
    return recursion(arr, iMid, iRight);
  }
}