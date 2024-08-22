/* 997. Find the Town Judge

https://leetcode.com/problems/find-the-town-judge/

Time complexity: O(n)
Space complexity: O(n)

Input: n = 2, trust = [[1,2]]
Output: 2

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
*/

var findJudge = function(n, trust) {
    let hashTrusted = new Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        hashTrusted[trust[i][1]] += 1;  // Person `b` is trusted by person `a`
        hashTrusted[trust[i][0]] -= 1;     // Person `a` trusts someone else (loses a point because the judge can't trust anyone)
    }

    for (let i = 1; i <= n; i++) {
        if (hashTrusted[i] === n - 1) {
            return i;
        }
    }
    return -1;
};