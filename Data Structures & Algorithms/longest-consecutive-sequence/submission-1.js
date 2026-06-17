class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let set=new Set(nums);
      let maxCount=0;
      for(let num of nums){
        if(!set.has(num-1)){
          let count=1;
          let value=num;
          while(set.has(value+1)){
            count++;
            value++;
          }
          maxCount=Math.max(maxCount,count);
        }
      }
      return maxCount;
    }
}
