class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        const res = [];
        let left = 0;
        let right = nums.length - 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[left] * nums[left] < nums[right] * nums[right]) {
                res[i] = nums[right] * nums[right];
                right--;
            } else {
                res[i] = nums[left] * nums[left];
                left++;
            }
        }
        return res;
    }
}
