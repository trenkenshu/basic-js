const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount( s1, s2 ) {
    let obj1 = {};
    let obj2 = {};
    coinsidence = 0;
    for(let i = 0; i < s1.length; i++) {
        obj1[s1[i]] = typeof obj1[s1[i]] === 'undefined' ? 1 :  obj1[s1[i]] + 1;
    }

    for(let i = 0; i < s2.length; i++) {
        obj2[s2[i]] = typeof obj2[s2[i]] === 'undefined' ? 1 :  obj2[s2[i]] + 1;
    }

    for( let key in obj1) {
        if(typeof obj2[key] !== 'undefined') {
            coinsidence += Math.min(obj1[key], obj2[key]);
        }
    }

    return coinsidence;

}
module.exports = {
  getCommonCharacterCount
};
