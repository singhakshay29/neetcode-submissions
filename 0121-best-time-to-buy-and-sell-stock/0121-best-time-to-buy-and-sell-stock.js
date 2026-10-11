/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - buy);
        }
    }
    return maxProfit;
};