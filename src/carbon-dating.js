const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || Number.isNaN(Number.parseFloat(sampleActivity)) 
  || Number.parseFloat(sampleActivity) <= 0 || Number.parseFloat(sampleActivity) > 15 
  || typeof(sampleActivity) !== 'string') {
    return false;
  } else {
    return age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
  }
};
