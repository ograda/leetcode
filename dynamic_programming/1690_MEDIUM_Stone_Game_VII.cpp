/*
1140. Stone Game VII

https://leetcode.com/problems/stone-game-vii/

Time complexity: O(n^3)
Space complexity: O(n^2)

Input: stones = [5,3,1,4,2]
Output: 6

Input: stones = [7,90,5,1,100,10,10,2]
Output: 122

*/

class Solution {
    public:
        // matrix to memorize the results
        std::vector<std::vector<int>> memo;

        int mathMax(int a, int b) {
            return a >b ? a:b;
        }

        int stoneGameVII(vector<int>& stones) {
           // the actual calculation should be ahead
            int n = stones.size(); // get the size of the piles
            vector<vector<int>> dp(n, vector<int>(n, 0)); // create a matrix to store the DP
            vector<int> prefixSum(n+1, 0);

            // The approach here is a bit different since we choose a stone from either the back or the front, we can use two iterators that we can change dinamicallty
            // Compute suffix sums
            // this helps us to determine the sum of a range of elements in an array, lets make it clearer
            // computing piles [1,2,3,4,5] suffix =  [15,14,12,9,5] (sum to get to a path)
            // now we can easily determine the amout of stones we are getting moving from Ith to Jth index
            // lets assume we want to move two stones from index 2 to 3, we know that we get 14-9 = 5 points
            // this is important so we don't need re-do the sum everytime we decide a path to take.
            for (int i = 0; i < n; ++i) {
                prefixSum[i+1] = prefixSum[i] + stones[i];
            }

            // Now approaching the problem with two iterators
            // If Alice takes the pile at the start (piles[i]), the remaining problem is reduced to dp[i+1][j].
            // If Alice takes the pile at the end (piles[j]), the remaining problem is reduced to dp[i][j-1].
            for (int length = 2; length <= n; ++length) {
                for (int i = 0; i <= n - length; ++i) {
                    int j = i + length - 1;
                    dp[i][j] = mathMax(prefixSum[j+1] - prefixSum[i+1] - dp[i+1][j],
                               prefixSum[j] - prefixSum[i] - dp[i][j-1]);
                }
            }

            // check the best difference alice can achieve on bob
            return dp[0][n-1];;
        }
};