class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
        let buy=prices[0];
        for(let i=1;i<prices.length;i++){
            let profit=prices[i]-buy;
            buy=Math.min(buy,prices[i]);
            maxProfit=Math.max(profit,maxProfit)
        }
        return maxProfit
    }
}
