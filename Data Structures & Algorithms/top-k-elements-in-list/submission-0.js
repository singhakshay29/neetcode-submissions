class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res=[];
        let map=new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }
        const sortedArr=[...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map((item)=>item[0]);
        return sortedArr;
    }
}
