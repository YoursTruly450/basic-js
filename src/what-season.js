const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date && !isNaN(date.valueOf())) {
    if (date.getMonth() <= 1) {
      return 'winter';
    } else if (date.getMonth() <= 4) {
      return 'spring';
    } else if (date.getMonth() <= 7) {
      return 'summer';
    } else if (date.getMonth() <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } else {
    throw new Error();
  }
};
