class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let totalPalindrome = 0;
        function expand(s, left, right) {
            let count = 0;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
            return count;
        }
        for (let i = 0; i < s.length; i++) {
            totalPalindrome += expand(s, i, i);
            totalPalindrome += expand(s, i, i + 1);
        }
        return totalPalindrome;
    }

}
