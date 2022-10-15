const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(string, obj) {
    let answer = '';
    let str = String(string);
    let opt = {
        rep:     obj.repeatTimes ? obj.repeatTimes : 1,
        sep:     obj.separator ? obj.separator : '+',
        add:     typeof obj.addition !== 'undefined' ? String(obj.addition) : false,
        addSep:  obj.additionSeparator ? obj.additionSeparator : '|',
        addRep:  obj.additionRepeatTimes ? obj.additionRepeatTimes : 1
    };

    //c(opt);

    for (let iter = 1; iter <= opt.rep; iter++) {
        answer += str;
        if(opt.add && opt.addRep) {
            for(let ii = 1; ii <= opt.addRep; ii++) {
                answer += ii === 1 ? opt.add : opt.addSep + opt.add;
            }
        }
        
        answer += iter < opt.rep ? opt.sep : ''; 
        
    }
    
    return answer;
}

module.exports = {
  repeater
};
