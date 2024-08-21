/*
664. Strange Printer

https://leetcode.com/problems/strange-printer/

Time complexity: O(n^3)
Space complexity: O(n^2)

Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".

Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

*/

class Solution {
    public int myMathMin(int a, int b){
        return a<b?a:b;
    }
    public int strangePrinter(String s) {
        int n = s.length();
        int[][] dp = new int[n][n]; // Create the dp array
      
        // Transversing the string to get all the valid substrings
        for (int i = n-1; i >=0; i--) {
            dp[i][i] = 1; // if we only have one character the answer is 1
            // Find possible substrings for the given letter at position
            for (int j = i + 1; j < n; j++) {
                // check if we have a substring
                if (s.charAt(i) == s.charAt(j)) 
                    // If the characters at the start and end of the substring are the same, we can print em together
                    dp[i][j] = dp[i][j-1];
                else {
                    // The characters are different, we need to consider all possible ways to split the substring
                    int minimum = 101; // set the maximum amount of ocurrencies
                     // Try splitting the substring at every possible position `k` between `i` and `j` and get the minimum splits
                    for (int k = i; k < j; k++)
                        minimum = myMathMin(minimum, dp[i][k] + dp[k+1][j]);
                    dp[i][j] = minimum;    
                }
            }
        }          
        return dp[0][n-1];
    }
}

// this DISCARTED solution answers the problem if you can't repeat letters once you already computed them.. since it is not the case, this solution is not valid  a DP solution will be provided
class Solution {
    public int letterToNumber(char letter) {
        return letter - 'a';
    }

    public int myMathMin(int a, int b){
        return a < b ? a :b;
    }

    public int strangePrinter(String s) {
        int n = s.length();
        int[] letter_memory = new int[26]; // Updated array size to 26 to cover all lowercase letters
        int[] letter_backwards_memory = new int[26]; // Updated array size to 26 to cover all lowercase letters
        int answer = 1;
        int answer_backwards = 1; // the answer will be one if there is one letter OR if all letters are the same
        char letter_pointer = s.charAt(0); // let's set the pointer at the first character
        char letter_backwards_pointer = s.charAt(n-1); // let's set the pointer at the first character
        letter_memory[letterToNumber(s.charAt(0))] = 1; // let's set the first character as seen
        letter_backwards_memory[letterToNumber(s.charAt(n-1))] = 1; // let's set the first character as seen

        // transverse the string to get the substrings (we can ignore the first letter since we already computed it)
        for (int i = 1; i < n; i++) {
            int substrings = 0;
            letter_pointer = s.charAt(i);
            // check if we have already computed this letter
            if (letter_memory[letterToNumber(letter_pointer)] != 1) {
                letter_memory[letterToNumber(letter_pointer)] = 1;
                substrings += 1;
                // check if we are matching a substring in the moment
                boolean matching_substring = true;
                boolean found_sucessor = false;
                boolean ending_substring = false;

                // find all substrings
                for (int j = i + 1; j < n; j++) {
                    char letter_next_pointer = s.charAt(j);
                    // check if we have a substring
                    if (matching_substring) {
                        if (letter_pointer != letter_next_pointer) {
                            if (letter_memory[letterToNumber(letter_next_pointer)] == 1 || ending_substring) {
                                matching_substring = false;
                                found_sucessor = false;
                                ending_substring = false;
                            } else {
                                found_sucessor = true;
                            }
                        } else if (found_sucessor) { 
                            ending_substring = true;
                        }
                    } else {
                        if (letter_pointer == letter_next_pointer) {
                            substrings += 1;
                            matching_substring = true;
                        }
                    }
                }
                answer += substrings;
            }
            // marking the letter as seen
            letter_memory[letterToNumber(letter_pointer)] = 1;
        }

        return answer;
    }
}