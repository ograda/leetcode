/*
1140. Stone Game II

https://leetcode.com/problems/stone-game-ii/

Time complexity: O(n^3)
Space complexity: O(n^2)

Input: piles = [2,7,9,4,4]
Output: 10

Input: piles = [1,2,3,4,5,100]
Output: 104

*/

#include <vector>

class Solution {
    public:
        // matrix to memorize the results
        std::vector<std::vector<int>> memo;

        int mathMax(int a, int b) {
            return a >b ? a:b;
        }

        
        int dp(int i, int M, std::vector<int>& suffix_sum, std::vector<int>& piles) {
            if (i >= piles.size()) return 0;
            if (memo[i][M] != -1) return memo[i][M];

            int max_stones = 0;
            for (int x = 1; x <= 2 * M && i + x <= piles.size(); ++x) {
                // Player A takes `x` piles, remaining piles go to Player B
                max_stones = mathMax(max_stones, suffix_sum[i] - dp(i + x, mathMax(M, x), suffix_sum, piles));
            }

            return memo[i][M] = max_stones;
        }
        
        int stoneGameII(std::vector<int>& piles) {
            int n = piles.size(); // get the size of the piles
            memo = std::vector<std::vector<int>>(n, std::vector<int>(n + 1, -1)); // memorization matrix [n, n+1]

            // Compute suffix sums
            // this helps us to determine the sum of a range of elements in an array, lets make it clearer
            // computing piles [1,2,3,4,5] suffix =  [15,14,12,9,5] (sum to get to a path)
            // now we can easily determine the amout of stones we are getting moving from Ith to Jth index
            // lets assume we want to move two stones from index 2 to 3, we know that we get 14-9 = 5 points
            // this is important so we don't need re-do the sum everytime we decide a path to take.
            std::vector<int> suffix_sum(n);
            suffix_sum[n - 1] = piles[n - 1];
            for (int i = n - 2; i >= 0; --i) {
                suffix_sum[i] = piles[i] + suffix_sum[i + 1];
            }

            // Start the game from the first pile with M = 1
            return dp(0, 1, suffix_sum, piles);
        }
};

