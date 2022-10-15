const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
    let nArr = n.toString().split('');
    let max = 0;
    let initialLength = nArr.length;

    for(let i = 0; i < initialLength; i++ ) {
        
        let temp = nArr.slice();
        let tempString = '';
        temp.splice(i, 1);
        for(let t = 0; t < temp.length; t++) {
            tempString += temp[t];
        } 
        max = max <= Number(tempString) ? Number(tempString) : max;
    }

    return max;
    
}

module.exports = {
  deleteDigit
};
