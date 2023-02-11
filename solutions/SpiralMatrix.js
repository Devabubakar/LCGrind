"use strict";
let me = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var spiralMatrix = function (matrix) {
  let top = 0;
  let left = 0;
  let bottom = matrix.length;
  let right = matrix[0].length - 1;
  let size = matrix.length * matrix[0].length;
  let result = [];
  while (result.length < size) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    if (top > bottom) break;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (left > right) break;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    if (top > bottom) break;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return result;
};
console.log(spiralMatrix(me));
