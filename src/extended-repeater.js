const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = '+';
  let additionSeparator = '|';
  if (options.separator) {
    separator = options.separator;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  let newSubStr = '';
  if ('addition' in options) {
    let addNewSubStr = String(options.addition);
    newSubStr = String(options.addition);
    if (options.additionRepeatTimes) {
      for (i = 1; i < options.additionRepeatTimes; i++) {
        newSubStr += additionSeparator + addNewSubStr;
      }
    }
  }
  let newStr = String(str) + newSubStr;
  let addNewStr = String(str) + newSubStr;
  if (options.repeatTimes) {
    for (i = 1; i < options.repeatTimes; i++) {
      newStr += separator + addNewStr;
    }
  }
  return newStr;
};