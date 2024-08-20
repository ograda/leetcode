/*
877. Stone Game

https://leetcode.com/problems/stone-game/

Time complexity: O(n^3)
Space complexity: O(n^2)

Input: piles = [5,3,4,5]
Output: true

Input: piles = [3,7,2,3]
Output: true

*/
#include <vector>

class Solution {
    public:
        // matrix to memorize the results
        std::vector<std::vector<int>> memo;

        int mathMax(int a, int b) {
            return a >b ? a:b;
        }

 
        bool stoneGame(vector<int>& piles) {
            // ASSUMING THE SPECIFIC SCENARIO WE CAN:
            // 1. Alice and Bob play optimally
            // 2. Alice starts the game
            // 3. The number of piles is even
            // 4. The sum of piles is odd
            // 5. The values of the piles are distinct
            // both players can see the best path between front and back of the piles
            // so we can assume that the first player will always win because he can choose to pick from the front or back half of the pile and always get the best path
            return true;
            
           // the actual calculation should be ahead
            int n = piles.size(); // get the size of the piles
            int totalStones = 0;
            for (auto it = piles.begin(); it != piles.end(); it++) totalStones += *it; // get the total number of stones

            vector<vector<int>> dp(n, vector<int>(n, 0)); // create a matrix to store the DP

            // The approach here is a bit different since we choose a stone from either the back or the front, we can use two iterators that we can change dinamicallty

            // Initialize the base cases: when there's only one pile left
            for (int i = 0; i < n; ++i) {
                dp[i][i] = piles[i];
            }

            // Now approaching the problem with two iterators
            // If Alice takes the pile at the start (piles[i]), the remaining problem is reduced to dp[i+1][j].
            // If Alice takes the pile at the end (piles[j]), the remaining problem is reduced to dp[i][j-1].
            for (int length = 2; length <= n; ++length) {
                for (int i = 0; i <= n - length; ++i) {
                    int j = i + length - 1;
                    dp[i][j] = mathMax(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1]);
                }
            }

            // The maximum stones Alice can collect
            int aliceStones = (totalStones + dp[0][n-1]) / 2;

            printf("Alice: %d, Total: %d\n", aliceStones, totalStones);
            // check if alice has more than half of the stones
            return aliceStones > totalStones/2;
        }
};