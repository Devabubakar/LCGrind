# The Quiz
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

class TwoSumSolution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        
        # we initial our empty hashMap first as we are not allowed to resues the same elemnt
        initialMap = {} # value : index
        
    
        #iterate over the array to get both the index and its value at a go
        for i,n in enumerate(nums): 
            
            # we loke of the difference between the target and the current value exist in our hashMap
            
            diff = target - n
            
            # if it does exist we return their indecies 
            if diff in initialMap:
                print([initialMap[diff], i])
                return [initialMap[diff], i]
                

            # otherwise we add the value to our hashmap
            initialMap[n] = i
            
        return

# TIME COMPLEXITY O(n) as we're going throught the array once
# SPACE COMPLEXITY O(n) as we could potentialy add all the elements into our hashMap

twoSumClass = TwoSumSolution()

twoSumClass.twoSum(nums = [1,2,4,5], target = 3)