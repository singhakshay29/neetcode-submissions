class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let totalWater=0;
        while(left<right){
            let currentWater=Math.min(heights[left],heights[right])*(right-left);
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
            totalWater=Math.max(totalWater,currentWater);
        }
        return totalWater;
    }
}
