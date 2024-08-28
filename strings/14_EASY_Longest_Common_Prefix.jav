/*
14. Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/

Time complexity: O(S)
Space complexity: O(S)

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
*/

class Solution {
    public String longestCommonPrefix(String[] strs) {
        String answer = "";
        
        // start the substring from the first character of the first string
       // char c = strs[0].charAt(0);
        int i = 0;
        while (i<201) {
            if (i >= strs[0].length()) return answer;
            char c = strs[0].charAt(i); // get the next comparison
            for (int j = 1; j < strs.length; j++) {
                // if we finishes a string we should stop looking for a prefix
                if (i >= strs[j].length()) return answer;
                if (c != strs[j].charAt(i)) return answer;
            }
            answer = answer + c;  // Adds the character to then substring
            i++;
        }
        return answer;
    }