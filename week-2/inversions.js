const fs = require('fs')
const ints = fs.readFileSync('integers.txt', 'utf-8').split('\n');

const merge = (left, right) => {
  let sorted = [];
  let count = 0;

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
      count += left.length;
    }
  }
  return [sorted.concat(left.slice().concat(right.slice())), count];
}
const inversions = (arr, lo, hi) => {
  if (lo === hi) {
    return [[arr[lo]], 0];
  }

  const mid = Math.floor(lo + (hi - lo) / 2)

  let [leftMerged, leftCount] = inversions(arr, lo, mid);
  let [rightMerged, rightCount] = inversions(arr, mid + 1, hi);
  let [merged, mergeCount] = merge(leftMerged, rightMerged);

  return [merged, leftCount + rightCount + mergeCount];
}

const get_inversions = arr => {
  return inversions(arr, 0, arr.length - 1)[1]
}

module.exports = inversions;