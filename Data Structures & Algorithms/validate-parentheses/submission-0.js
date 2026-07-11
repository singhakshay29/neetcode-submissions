class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];
        let obj={'}':'{',']':'[',')':'('};
        for(let i=0;i<s.length;i++){
            if(s[i]==='('||s[i]==='{'||s[i]==='['){
                stack.push(s[i]);
            }else{
                let bracket = stack.pop();
                if(bracket !==obj[s[i]] ){
                    return false;
                }
            }
        }
        return stack.length === 0;
        
    }
}
