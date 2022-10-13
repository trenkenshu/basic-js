const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disNum, tSpeed ) {
  let ans = {};

ans.turns = Math.pow(2, disNum) - 1;
ans.seconds = Math.floor( ans.turns / tSpeed * 3600 );
return ans;

}

module.exports = {
  calculateHanoi
};
