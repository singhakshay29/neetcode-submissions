class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let left=0;
        let mid=0;
        let right=nums.length-1;
        while(mid<=right){
            if(nums[mid]===0){
                [nums[left],nums[mid]]=[nums[mid],nums[left]];
                mid++;
                left++;
            }else if(nums[mid]===1){
                mid++;
            }else{
                [nums[mid],nums[right]]=[nums[right],nums[mid]];
                right--;
            }
        }
        return nums;
    }
}
