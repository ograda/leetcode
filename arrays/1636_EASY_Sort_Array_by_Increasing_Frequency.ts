/* 
1636. Sort Array by Increasing Frequency

https://leetcode.com/problems/sort-array-by-increasing-frequency/

Example 1:
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Example 2:
Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Example 3:
Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
*/

// Sort the array of frequencies
function compareFrequencyandValue(a: number, b: number, map: Record<number, number>): number {
    const fA = map[a];
    const fB = map[b];

    // Sort by value in decreasing order if frequencies are the same
    if (fA === fB) {
        return b - a;
    }
    
    // Sort by frequency in increasing order
    return fA - fB;
}

function frequencySort(nums: number[]): number[] {
    // Create a hash map to store the frequency of each number
    const hash: Record<number, number> = {};

    // Count the frequencies
    for (const num of nums) {
        hash[num] = (hash[num] || 0) + 1;
    }

    return nums.sort((a, b) => compareFrequencyandValue(a, b, hash));
}