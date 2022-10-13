const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let cats = 0;
  for(let i = 0; i < matrix.length; i++) {
    let innerMatrix = matrix[i];
    console.log('inner: '+innerMatrix); 
    for(let x = 0; x < innerMatrix.length; x++) {
      
      cats = innerMatrix[x] === '^^' ? cats + 1 : cats;
      console.log('curent: '+innerMatrix[x]+', is cat:'+(innerMatrix[x] === '^^'));
    }
  }
  return cats;
}

module.exports = {
  countCats
};
