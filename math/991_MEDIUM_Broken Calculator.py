"""
991. Broken Calculator (Medium)

https://leetcode.com/problems/broken-calculator/

Time complexity: O(log n)
Space complexity: O(1)

Input: startValue = 2, target = 3
Output: 2

Input: startValue = 5, target = 8
Output: 2

Input: startValue = 3, target = 10
Output: 3
"""

class Solution(object):
    #return math absolute value
    def MathAbs(self,a):
        return a if a>=0 else -a
    
    #return math minimum value
    def MathMin(self,a,b):
        return a if a<b else b

    def calculate(self, n, t):
        acc = 0 #accumulator
        while t > n: #while target is greater than N, lets try to undo the last operation
            if t % 2 == 0: #if the target is even the last operation was a multiplication
                t //= 2
            else: #if the target is odd the last operation was a subtraction
                t += 1
            acc += 1
        #when we reach this point the target is less or equal to N, we can just subtract N from the target and add the accumulator
        #WHY I NEED THIS. the only way to get to lower values is by subtracting, since n and t can't assume values lower than 1.
        return acc + (n - t)

        #right for this problem we can assume a greed solution of always choosing the operation where the double get closer than the target ? Or should we factor it?
    def brokenCalc(self, startValue, target):
        return self.calculate(startValue,target)

        