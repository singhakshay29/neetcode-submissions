/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
    let n = nums.length;
    let squares = [];

    for (let i = 0; i < n; i++) {
        squares[i] = nums[i] * nums[i];
    }
    squares.sort((a,b)=>a-b);

    let totalScore = 0;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        if (i < mid) {
            totalScore -= squares[i];
        } else {
            totalScore += squares[i];
        }
    }

    return totalScore;
};