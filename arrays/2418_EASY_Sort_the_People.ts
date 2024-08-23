/* 
2418. Sort the People

https://leetcode.com/problems/sort-the-people/

Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/

// here we can sort the heights and names together
function sortPeople(names: string[], heights: number[]): string[] {
    //sorting the heights and executing the same sorting on the names
    for (let i = 0; i < heights.length - 1; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                // Swap heights[i] and heights[j]
                let temp = heights[i];
                let Ntemp = names[i];
                heights[i] = heights[j];
                names[i] = names[j];
                heights[j] = temp;
                names[j] = Ntemp;
            }
        }
    }
    return names;
};