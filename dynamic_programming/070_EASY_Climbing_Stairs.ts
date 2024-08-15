// 70. Climbing Stairs

// https://leetcode.com/problems/climbing-stairs/

// time complexity: O(1)
// space complexity: O(1)

// Input: n = 2
// Expected output: 2

// Input: n = 3
// Expected output: 3

function climbStairs(n: number): number {
    // If there are no stairs or only one stair, there is only one way to climb the stairs

    /*
    //binets formula will give the exact answer to the problem
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    return n > 3 ? Math.round((Math.pow(phi, n+1)) / sqrt5) : n;
    */

    let prev2 = 1; // F(0) starting at 0
    let prev1 = 1; // F(1) starting at 1

    for (let i = 1; i < n; i++)  // iterate until we reach the nth stair
        [prev2, prev1] = [prev1, prev2 + prev1]; // update the previous 2 steps and the previous 1 step
  
    return prev1;

}