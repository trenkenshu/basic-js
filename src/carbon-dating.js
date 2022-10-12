const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  
  let sa = parseFloat(sampleActivity);
  if(typeof sampleActivity !== 'string' || sa  <= 0 || sa >= 14.99 || isNaN(sa)) {
    return false;
  } 
   
  let k = Math.log( 15 / sa );
  let ans = Math.ceil( k / ( 0.693 / 5730));
  console.log(ans);
  return ans;
      


}

module.exports = {
  dateSample
};
