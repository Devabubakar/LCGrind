// Problem Statement: Given an array of integers nums, return the sign of the product of all the elements in nums.

// In other words, we need to find the sign of the product of all the elements in the array. The sign of the product is either positive (1), negative (-1), or zero (0).

// Example:
// Input: nums = [1, 2, 3, 4]
// Output: 1
// Explanation: The product is 24, which is positive, so the output is 1.

// Input: nums = [-1, -2, -3, -4]
// Output: -1
// Explanation: The product is 24, which is positive, so the output is -1.

// Input: nums = [0, 2, 3, 4]
// Output: 0
// Explanation: The product is 0, so the output is 0.

// Solution:
// We can find the sign of the product by counting the number of negative elements in the array. If the number of negative elements is odd, then the sign of the product is negative. If the number of negative elements is even, then the sign of the product is positive. If there are zero elements in the array, then the sign of the product is 0.
const signOfProduct = function (nums) {
  let negCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) negCount++;
    if (nums[i] === 0) return 0;
  }
  return negCount % 2 === 0 ? 1 : -1;
};
