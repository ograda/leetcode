"""
650. 2 Keys Keyboard

https://leetcode.com/problems/2-keys-keyboard/

Time complexity: O(n)
Space complexity: O(1)

Input: n = 3
Output: 3

Input: n = 1
Output: 0
"""
class Solution(object):
    def factor(self, n):
        sumNeeded = 0 #this is the sum of factors needed to get to n
        stop_comparing = n/2 #you can stop comparing at n/2 because this is the least number we need to divide it to
        i = 2 #starting the iterator at 2 (least prime)
        while (i <= stop_comparing and n>1):
            if n % i == 0: #dividing N for i factor until we can progress to the next factor
                sumNeeded += i
                n //= i
            else: #n is not divisible by I, increasing it
                i += 1
        return sumNeeded if sumNeeded > 0 else n

    #this could be solved using DP but taking in consideration leetcode input/output structure this should be the best solution
    #considering a single input and treating it as a single case, the DP should be calculated for every single case wich would result in the same time complexity or even worse depending on how it is implemented
    #DP would fit better if we had to calculate multiple cases at once instead of answering single cases
    def minSteps(self, n):

        if n==1: #the case where we start with n=1 should return 0 because no iterations are needed
            return 0
        
        # we should factor each N and go getting the factors and answer the sum of them
        return self.factor(n)
        