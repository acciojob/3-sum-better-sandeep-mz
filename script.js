function threeSum(arr, target) {
  if (arr.length < 3) {
    return null; // Not enough elements to form a triplet.
  }

  let closestSum = arr[0] + arr[1] + arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const currentSum = arr[i] + arr[j] + arr[k];

        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;
