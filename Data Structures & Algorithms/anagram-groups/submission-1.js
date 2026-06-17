class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
  for (let word of strs) {
    let sort = word.split("").sort().join();
    if (map.has(sort)) {
      map.get(sort).push(word);
    } else {
      map.set(sort, [word]);
    }
  }
  return [...map.values()];
    }
}
