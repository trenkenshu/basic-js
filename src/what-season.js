const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  if(!date.getMonth) {
    throw new Error('Invalid date!');
  }

  for( let key in date) {
    if(key !== null) {
      throw new Error('Invalid date!');
    }
  }
  
  let [winter, 
    spring, 
    summer, 
    autumn] = [[11, 0, 1],
              [2, 3, 4],
              [5, 6, 7],
              [8, 9, 10]];

 return winter.includes(date.getMonth()) ? 'winter' :
      spring.includes(date.getMonth()) ? 'spring' :
      summer.includes(date.getMonth()) ? 'summer' : 'autumn';

}

module.exports = {
  getSeason
};
