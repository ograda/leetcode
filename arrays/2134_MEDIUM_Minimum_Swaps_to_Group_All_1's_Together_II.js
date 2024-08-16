// 2134. Minimum Swaps to Group All 1's Together II

// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/

// Time complexity: O(n)
// Space complexity: O(1)

// Input: nums = [0,1,0,1,1,0,0]
// Expected Output: 1

// Input: nums = [0,1,1,1,0,0,1,1,0]
// Expected Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

function minimum(a,b) {
    return a < b ? a : b;
}

var minSwaps = function(nums) {
    // Count total number of 1s (to define what we are looking for)
    let ones_count = nums.reduce((sum, num) => sum + num, 0);
    // No swaps needed if all are 0s or all are 1s
    if (ones_count === 0 || ones_count === nums.length) return 0;

    let current_zeros = 0;
   // Initial window of size ones_count
   for (let i = 0; i < ones_count; i++) 
        if (nums[i] === 0) current_zeros++;
    let min_zeros = current_zeros;

    // Sliding window across the array (since its a circular array we need to consider it again)
    for (let i = ones_count; i < 2*nums.length; i++) {
        if (nums[i%nums.length] === 0) current_zeros++; // Add new element in the window
        if (nums[(i - ones_count)%nums.length] === 0) current_zeros--; // Remove element out of the window
        min_zeros = minimum(min_zeros, current_zeros);
    }

    return min_zeros;
};