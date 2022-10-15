const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let domain = '';
    for( let i = email.length - 1; i >= 0; i--) {
        domain = email[i] === '@' ? email.slice(i + 1, email.length) : '';
        i = domain.length > 0 ? 0 : i;
    }
    return domain;
}

module.exports = {
  getEmailDomain
};
