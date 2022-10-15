const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    var ans = '';
    var counter = 1;
    for (var i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                counter++;
            } else {
                ans += counter == 1 ? str[i] : counter+str[i];
                counter = 1;
            }
        }

    return ans;

}


module.exports = {
  encodeLine
};
