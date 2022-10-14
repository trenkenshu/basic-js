const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
    calculateDepth(arrayInput) {
      if(this.isRecursion === true ) {
                
      } else {
        this.maxLevel = 1;
        this.level = 1;
      }
      //this.maxLevel = this.maxLevel && this.isRecursion === true ? this.maxLevel : 1;
      //this.level = this.level && this.isRecursion === true ? this.level : 1;
      
      for(let i = 0; i <= arrayInput.length; i++) {
        
        this.maxLevel = this.maxLevel < this.level ? this.level : this.maxLevel;
               
        if(Array.isArray(arrayInput[i])) {
            this.level++;
            //c(arrayInput[i]);
            //c('going up '+this.level);
            this.maxLevel = this.maxLevel < this.level ? this.level : this.maxLevel;
            
            this.isRecursion = true; 
            this.calculateDepth(arrayInput[i]);
            
        } 

        if(i == arrayInput.length - 1 || arrayInput.length == 0) {
            this.level--;
            //c(arrayInput[i]);
            //c('going down '+this.level);
            this.level === 0 ? this.isRecursion = false : this.isRecursion = true;
            //c('rec:'+this.isRecursion)
        }
          
    };  

       let answer = this.maxLevel;
        if(this.isRecursion === false ) {
            this.maxLevel = 1;
            this.level = 1;
        }
        return answer;
    }
  }

module.exports = {
  DepthCalculator
};
