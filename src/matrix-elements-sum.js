const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum( matrix) {
    let sum = 0;
    for (let rows = 0; rows < matrix. length; rows++) {
        let cols = matrix[rows].length;
        for (let i = 0; i < matrix[rows].length; i++) {
            if( rows > 0 ) {
                sum = matrix[rows - 1][i] === 0 ? sum : sum + matrix[rows][i];
            } else {
                sum += matrix[rows][i];
            }
        }
    }
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
