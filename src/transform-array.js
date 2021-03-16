const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const isItem = (el) => !String(el).startsWith('--');
  if (Array.isArray(arr)) {
    let array = [];
    let buffArray = [];
    let discard = false;
    for (let i = 0; i < arr.length; i++) {
      if (!discard) {
        buffArray.push(arr[i]);
        switch (arr[i]) {
          case '--discard-next':
            if (!discard) {
              discard = !discard;
            }
            break;
          case '--discard-prev':
            if (isItem(buffArray[i - 1]) && array.length > 0) {
              array.splice(array.length - 1, 1);
            }
            break;
          case '--double-next':
            if (i < arr.length - 1 && isItem(arr[i + 1])) {
              let item = arr[i + 1];
              array.push(item);
            }
            break;
          case '--double-prev':
            if (isItem(buffArray[i - 1]) && array.length > 0) {
              let item = array[array.length - 1];
              array.push(item);
            }
            break;
          default:
            let item = arr[i];
            array.push(item);
            break;
        }
      } else {
        buffArray.push('--discard');
        discard = !discard;
      }
    }
    return array;
  } else {
    throw new Error();
  }
};
