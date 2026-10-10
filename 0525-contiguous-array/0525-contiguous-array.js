/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let map = new Map();
    let prefixSum = 0;
    let maxLength = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        } else {
            let length = i - map.get(prefixSum);
            maxLength = Math.max(maxLength, length)
        }
    }
    return maxLength;
};