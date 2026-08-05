class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let map = new Map();
        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        for (let [key, value] of map.entries()) {
            if (value === 1) {
                return s.indexOf(key);
            }
        }
        return -1;
    }
}
