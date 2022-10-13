const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain = this.chain ?
      this.chain
        :
          [];
      /*********************** print() ******************************/
      this.print = function () {
      let answer = '';
      
        for(let i = 0; i < this.chain.length; i++) {
          this.chain[i] = this.chain[i] == null ?
            'null'
              :
                this.chain[i];
          answer += i == 0 ? 
            '( '+this.chain[i].toString()+' )' 
              :
                '~~( '+this.chain[i].toString()+' )';
        }
      
      return answer;
    };

    /*value === null ? 
      this.chain.push('null') 
        : 
          value === false ? 
            this.chain.push('false')
            :*/
              this.chain.push(String(value));
    
    return this;
  },
  removeLink(position) {
    
    if( position <= 0 || typeof position !== 'number' || !this.chain[position - 1] ) {
      //c('chain: '+this.chain+' try to remove pos: '+ this.chain[position - 1]+" chain length "+this.chain.length);
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
      
    } else {
    //c('chain: '+this.chain+' try to remove pos: '+ position);
    this.chain.splice(position - 1, 1);
    //c('look afterwards: '+this.chain);
    return this; 
  }
  },
  reverseChain() {
    let reverse = [];
    for(let i = this.chain.length - 1; i >= 0; i--) {
      reverse[(this.chain.length - 1) - i] = this.chain[i];
    }
    this.chain = reverse;
    return this;
  },
  finishChain() {
    let result = this.print();
    this.chain = [];
    return result;
  }
};



module.exports = {
  chainMaker
};
