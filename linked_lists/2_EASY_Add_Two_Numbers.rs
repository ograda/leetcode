/*
2. Add Two Numbers

https://leetcode.com/problems/add-two-numbers/

*assume n the bigger list size
time complexity: O(n)
space complexity: O(n)

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/



impl Solution {
    // we have two approachs to solve this, we could unpack the number, sum it and re pack it
    // or we can iterate trough both lists simultaneously to create a new one
    // we MUST choose the second way and iterate trough the list directly and create a new on with the result, otherwise we won't be able to represent a number with 100 digits, since even with long (2^64) we can only represent 20 digits.
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    // We need this so we can return the hole list, and current will be the position iterator in the list.
    let mut dummy_head = Box::new(ListNode::new(0));
    let mut current = &mut dummy_head;
    // We need this in the case we are summing numbers that result a carry number I.E 5+6 = 11 so we need to carry 1 to the next sum
    let mut carry = 0;
    let mut p = l1;
    let mut q = l2;
    
    while p.is_some() || q.is_some() {
        // Get the nodes sum for the nodes found
        let sum = carry + p.as_ref().map_or(0, |node| node.val) + q.as_ref().map_or(0, |node| node.val);
        // Get the number that is carrying on to the result next node
        carry = sum / 10;
        // Create a new node in result and add the digits part
        current.next = Some(Box::new(ListNode::new(sum % 10)));
        current = current.next.as_mut().unwrap();
        
        // Move to the next nodes in the lists
        p = p.and_then(|node| node.next);
        q = q.and_then(|node| node.next);
    }
    // Now that we have finished, we must check for a new carry that has remained in case that our end numbers provide one and we need a new node just for that one.
    if carry > 0 {
        current.next = Some(Box::new(ListNode::new(carry)));
    }
    
    dummy_head.next
}

}