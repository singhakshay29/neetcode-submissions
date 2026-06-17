class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         let set = new Set(nums);
  let maxCount = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentCount = 1;
      let currentValue = num;
      while (set.has(currentValue + 1)) {
        currentCount++;
        currentValue += 1;
      }

      maxCount = Math.max(maxCount, currentCount);
    }
  }
  return maxCount;
    }
}
