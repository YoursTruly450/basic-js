const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat().filter((el) => el === '^^');
  return arr.length;
};
