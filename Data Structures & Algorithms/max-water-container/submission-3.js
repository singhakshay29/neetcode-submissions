class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let total=0;
        while(left<right){
            let water=Math.min(heights[left],heights[right])*(right-left);
            total=Math.max(total,water);
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return total;
    }
}
