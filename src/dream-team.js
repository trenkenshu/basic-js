const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }

  let title = [];
  let ans = '';
  for(key in members) {
    let splitName = [];
    if(typeof members[key] === 'string') {
      splitName = members[key].split(" "); 
    }
    for (let x  = 0; x < splitName.length; x++) {
      if(splitName[x] !== '') {
        title.push(splitName[x].toUpperCase().slice(0,1));
        x = splitName.length;
      }
    }
    
  }

  title.sort();
    for(key in title) {
      ans += title[key];
    }

  return ans;
}

module.exports = {
  createDreamTeam
};
