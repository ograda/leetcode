"""
94. Binary Tree Inorder Traversal

https://leetcode.com/problems/binary-tree-inorder-traversal/

Time complexity: O(n)
Space complexity: O(n)

Input: root = [1,null,2,3]
Output: [1,3,2]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
"""

func inorderTraversal(root *TreeNode) []int {
	// Lets check for an empty tree
	if root == nil {
		return []int{}
	}

	// For this problem we need to create a stack, and transverse the three recursively, when we get to the last node, we start adding the values the stack.
    result := []int{}
    stack := []*TreeNode{}
    current := root

    for current != nil || len(stack) > 0 {
        // Reach the leftmost TreeNode
        for current != nil {
            stack = append(stack, current)
            current = current.Left
        }

        // Current must be nil at this point
        current = stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        result = append(result, current.Val)

        // Visit the right subtree
        current = current.Right
    }

    return result
}