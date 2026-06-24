class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        for (let num of nums) {
            let count = (map.get(num) || 0) + 1;
            map.set(num, count);
            if(count>nums.length/2){
                return num;
            }
        }
    }
}
