class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res=[];
        let map=new Map();
        for(let i=0;i<nums2.length;i++){
            let max=-1;
            let j=i+1;
            while(j<nums2.length){
                if(nums2[i]<nums2[j]){
                    max=nums2[j];
                    break;
                }
                j++;
            }
            map.set(nums2[i],max);
        }
        for(let num of nums1){
            res.push(map.get(num));
        }
        return res;
    }
}
