"""
590. N-ary Tree Postorder Traversal

https://leetcode.com/problems/n-ary-tree-postorder-traversal/

Time complexity: O(n)
Space complexity: O(n)

Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
"""

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

 func postorder(root *Node) []int {
    // Lets check for an empty tree
    if root == nil {
        return []int{}
    }

    // now since we can't interact direct through the nodes, and we get the children passed to us in an array, we need a stack to deal with them.
    stack := []*Node{root}
    result := []int{}

    for len(stack) > 0 {
        // Pop the node from the stack
        current := stack[len(stack)-1]
        stack = stack[:len(stack)-1]

        // Insert the node's value at the beginning of the result list
        result = append([]int{current.Val}, result...)

        // Push all children onto the stack
        for _, child := range current.Children {
            stack = append(stack, child)
        }
    }

    return result
}