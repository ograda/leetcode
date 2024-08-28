/*
1905. Count Sub Islands

https://leetcode.com/problems/count-sub-islands/

Time complexity: O(n*m)
Space complexity: O(n*m)

Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3

Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
*/

class Solution {
    private boolean dfs(int[][] grid1, int[][] grid2, int x, int y) {
         // Base case: Check if the current position is out of bounds or if grid2[x][y] is water (0)
        if (x < 0 || x >= grid1.length || y < 0 || y >= grid1[0].length || grid2[x][y] == 0)
            return true;

         // If the corresponding cell in grid1 is water (0) while grid2 is land (1), it's not a sub-island
        if (grid1[x][y] == 0)
            return false;
            
        // Mark the current cell in grid2 as visited by setting it to 0
        grid2[x][y] = 0;
        boolean res = true;
        // Recursively perform DFS in all four directions (down, up, right, left)
        // The result is the logical AND of all these DFS calls, meaning if any return false, the whole result is false
        res &= dfs(grid1, grid2, x + 1, y); // Move down
        res &= dfs(grid1, grid2, x - 1, y); // Move up
        res &= dfs(grid1, grid2, x, y + 1); // Move right
        res &= dfs(grid1, grid2, x, y - 1); // Move left
        
        return res;
    }

    public int countSubIslands(int[][] grid1, int[][] grid2) {
        int m = grid1.length, n = grid1[0].length, count = 0;

        // Iterate through each cell in grid2
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                // If the current cell in grid2 is land (1), initiate DFS to check if it's a sub-island
                if (grid2[i][j] == 1) {
                    // Call DFS; if it returns true, it means we've found a valid sub-island, so increment the count
                    if (dfs(grid1, grid2, i, j)) {
                        ++count; // Increment sub-island count
                    }
                }
            }
        }
        return count;
    }
}