class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let clearStr=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  let rev=clearStr.split('').reverse().join('');
  return clearStr===rev;
    }
}
