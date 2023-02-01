// 1.	Count Good Nodes in Binary Tree (129 times): https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Problem Statement
// Given a binary tree, you have to count the number of nodes where the node's value is greater than or equal to every node in its subtree. These are called "good nodes".

// Thought Process
// To count the number of good nodes in a binary tree, we need to perform a depth-first search (DFS) of the tree while keeping track of the maximum value encountered so far. If the value of a node is greater than or equal to the maximum value encountered so far, it is considered a good node, and we increment the count.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    let maxSoFar = -Infinity; // initialize maxSoFar as negative infinity
    
    // helper function to traverse the tree
    function dfs(node) {
        if (!node) return; // if node is null, return
        if (node.val >= maxSoFar) {
            count++; // if node value is greater than or equal to maxSoFar, increment count
            maxSoFar = node.val; // update maxSoFar with the current node value
        }
        dfs(node.left); // traverse the left subtree
        dfs(node.right); // traverse the right subtree
    }
    
    dfs(root); // start traversing from the root node
    return count; // return the number of good nodes
};
