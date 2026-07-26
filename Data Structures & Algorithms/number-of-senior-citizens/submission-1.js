class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        const age = details.map((item) => item.charAt(11)+item.charAt(12)).filter((value)=>Number(value)>60)
       return age.length;
    }
}
