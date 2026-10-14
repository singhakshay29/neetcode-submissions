/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let set = new Set();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }
    return res;
};