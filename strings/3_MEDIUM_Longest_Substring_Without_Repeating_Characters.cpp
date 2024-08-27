/*
3. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

time complexity: O(n)
space complexity: O(n)

Input: s = "abcabcbb"
Output: 3

Input: s = "bbbbb"
Output: 1

Input: s = "pwwkew"
Output: 3
*/

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // We need a heap map to save the letters and their last occurency position
        unordered_map<char, int> last_occurrence;
        int start = 0;
        int answer = 0;

        for (int i = 0; i < s.length(); ++i) {
            char current_char = s[i];

            // If we can find the character in the occurrencies heap
            if (last_occurrence.find(current_char) != last_occurrence.end() && last_occurrence[current_char] >= start) 
                // Move the start pointer to the right of the last occurrence
                start = last_occurrence[current_char] + 1;
        
            // Update the last occurrence of the character
            last_occurrence[current_char] = i;

            // Calculate the length of the current window
            int current_size = i - start + 1;

            // Update the maximum length found
            answer = max(answer, current_size);
        }

        return answer;
    }
};