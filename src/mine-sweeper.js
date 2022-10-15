const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix ) {
    let field = [];
    
    for (let rows = 0; rows < matrix.length; rows++) {
        field[rows] = [];

        for (let cols = 0; cols < matrix[rows].length; cols++) {
            field[rows][cols] = 0;
            /****************************** UPPER ROW *************************/
            if(rows > 0 ) {
                if(matrix[rows - 1][cols - 1] === true ) {
                    field[rows][cols]++;
                } 
                if(matrix[rows - 1][cols] === true ) {
                    field[rows][cols]++;
                } 
                if(matrix[rows - 1][cols + 1] === true ) {
                    field[rows][cols]++;
                } 
            } 
            /****************************** CURRENT ROW *************************/
            
                if(matrix[rows][cols - 1] === true ) {
                    field[rows][cols]++;
                } 
                 

                if(matrix[rows][cols + 1] === true ) {
                    field[rows][cols]++;
                }
            /****************************** LOWER ROW *************************/
            if(rows < matrix.length - 1 ) {
                if(matrix[rows + 1][cols - 1] === true ) {
                    field[rows][cols]++;
                } 
                if(matrix[rows + 1][cols] === true ) {
                    field[rows][cols]++;
                } 
                if(matrix[rows + 1][cols + 1] === true ) {
                    field[rows][cols]++;
                } 
            } 

        }
    }
    
    return field;
}

module.exports = {
  minesweeper
};
