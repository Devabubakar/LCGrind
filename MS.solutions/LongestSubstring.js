//Windows method
var lengthOfLongestSubstring = function (s) {
  //get length of input string
  let n = s.length;
  //check the length of string should be longer than the string
  if (n === 0) return 0;
  //set uniquely add character  to the value
  let charSet = new Set();
  let result = 0;
  //left pointer and right pointer
  let left = 0;
  let right = 0;
  while (right < n) {
    //check if the value does exist in the dataset charSet if it does not add to the charset
    if (!charSet.has(s[right])) {
      //add to char Set
      charSet.add(s[right]);
      //return the value which is greater and store in result
      result = Math.max(result, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  return result;
};
