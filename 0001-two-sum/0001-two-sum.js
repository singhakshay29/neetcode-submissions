/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map=new Map();
    for (let i = 0; i < nums.length; i++) {
        let findValue = target - nums[i];
        if (map.has(findValue)) {
            return [map.get(findValue), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
};