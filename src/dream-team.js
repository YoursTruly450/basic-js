const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length > 0) {
    return arr = members.map((el) => {
      if (typeof(el) == 'string') {
        return el.split('').filter(a => a !== ' ').join('')[0].toUpperCase();
      }
    }).sort().join('');
  } else {
    return false;
  }
};
