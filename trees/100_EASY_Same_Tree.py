"""
100. Same Tree

https://leetcode.com/problems/same-tree/

Time complexity: O(n)
Space complexity: O(height)

Example:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]
Output: true

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]
Output: false

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]
Output: false
"""

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution(object):
    # check the size of the tree
    def sizeTree(self,T):
        left_size = self.sizeTree(T.left) if T.left else 0
        right_size = self.sizeTree(T.right) if T.right else 0
        return 1 + left_size + right_size

    # compare the two Trees recursive solution
    def compareTree(self,Ta,Tb):
        # checking for Null nodes, if both are Null, they are the same
        if not Ta and not Tb:
            return True
        
        # If one is NUll and the other is not, they are different
        if not Ta or not Tb:
            return False
        
        # If the current nodes' values are different, the trees are different
        if Ta.val != Tb.val:
            return False

        # Recursively check left and right subtrees
        left_side = self.compareTree(Ta.left, Tb.left)
        right_side = self.compareTree(Ta.right, Tb.right)
        
        return left_side and right_side
        
    # compare two threes BFS QUEUE
    def queueSameTree(self, p, q):
        queue = deque([(p, q)])
        while queue:
            node1, node2 = queue.popleft()
            
            # If both nodes are None, continue to the next pair
            if not node1 and not node2:
                continue
            
            # If one is None and the other is not, trees are not the same
            if not node1 or not node2:
                return False
            
            # If the values do not match, trees are not the same
            if node1.val != node2.val:
                return False
            
            # Add the children to the queue for further comparison
            queue.append((node1.left, node2.left))
            queue.append((node1.right, node2.right))
        
        return True
    

    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """ 
        return self.queueSameTree(p,q)
        