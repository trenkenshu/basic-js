const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains ) {
    let stat = {};
    for(let i = 0; i < domains.length; i++) {
        
        let temp = domains[i].split('.').reverse().join('.');
        temp = '.' + temp;
        stat[temp] = typeof stat[temp] === 'undefined' ? 1 : stat[temp] + 1;
        for(let y = temp.length; y >= 0; y-- ) {
            if(temp[y] === '.' && y > 0) {
                stat[temp.slice(0, y)] = typeof stat[temp.slice(0, y)] === 'undefined' ? 1 : stat[temp.slice(0, y)] + 1;
                
            } 
        }
        
    }

    return stat;
  }

module.exports = {
  getDNSStats
};
