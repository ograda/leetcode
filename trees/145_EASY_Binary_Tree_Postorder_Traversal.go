"""
145. Binary Tree Postorder Traversal

https://leetcode.com/problems/binary-tree-postorder-traversal/

Time complexity: O(n)
Space complexity: O(n)

Input: root = [1,null,2,3]
Output: [3,2,1]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
"""

func postorderTraversal(root *TreeNode) []int {
    // Lets check for an empty tree
    if root == nil {
        return []int{}
    }
    // For this problem we need to create a stack, and transverse the three recursively, when we get to the last node, we start adding the values the stack.
    stack := []*TreeNode{root}
    result := []int{}
    current := root
	
    for len(stack) > 0 {
        // Pop the node from the stack
        node := stack[len(stack)-1]
        stack = stack[:len(stack)-1]

        // Insert the node's value at the beginning of the result list
        result = append([]int{node.Val}, result...)

        // Push the left and right children onto the stack
        if node.Left != nil {
            stack = append(stack, node.Left)
        }
        if node.Right != nil {
            stack = append(stack, node.Right)
        }
    }

    return result
}