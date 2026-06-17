class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        str = str.replace(/[^a-zA-Z0-9]/g, "");
        let left = 0;
        let right = str.length-1;
        while (right > left) {
            if (str[right] !== str[left]) {
                return false;
            }
        right--;
        left++;
    }
    return true;
    }
}
