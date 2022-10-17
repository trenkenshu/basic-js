const { NotImplementedError } = require('../extensions/index.js');

let c = (...args) =>  {
    let string = '';
    args.length == 1 ?
        console.log(args[0])
        :
        console.log(args.reduce((acc, item) => {
            acc += item+', ';
            return acc;
        }, ''))
    
}

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
    encrypt(string, key) {
        if( typeof string === "undefined" || typeof key === "undefined") {
            throw new Error('Incorrect arguments!');
        }
        
        console.log('str: ', string, ', key ', key)

        let ans = '';
        let keyIndex = 0;
        let ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        string =string.toUpperCase();
        key = key.toUpperCase();
            
        
        /********************************** NO SPACE  *******************************/
        let noSpaceArr = string.split(' ');
        let noSpaceString = '';
        for (let i in noSpaceArr ) {
            noSpaceString += noSpaceArr[i];
        }

        //c(noSpaceString, noSpaceArr)

        if(string.length > key.length) {
           let mult =  Math.floor(string.length / key.length) ;
           let oldKey = key;
           while ( mult > 0 ) {
            key += oldKey;
            mult--;
           }
        
        }

        for(let i = 0; i < noSpaceString.length; i++) {
            
            if ((/[a-zA-Z]/).test(noSpaceString[i])) {
                let charPos = ascii.indexOf(noSpaceString[i]);
                let keyPos = ascii.indexOf(key[keyIndex]);
                let encodedAlpha = ascii.slice(keyPos, 26) + ascii.slice(0, keyPos);
                let encChar = encodedAlpha[charPos];
                ans += encChar;
                keyIndex++;
            } else {
                ans += noSpaceString[i];
                keyIndex++;
            }
        }
        let final ='';
        let posInAns = 0;
        for(let i = 0; i <= noSpaceArr.length - 1; i++) {
            final += ans.slice(posInAns, noSpaceArr[i].length + posInAns);
            final += i < noSpaceArr.length - 1 ? ' ' : '';
            posInAns += noSpaceArr[i].length;
        }

        if (this.direction === 'reverse') {
            /*let newFinal = '';
            for(let i = final.length -1; i >= 0; i--) {
                newFinal += final[i];
            }
            final = newFinal;*/

            final = final.split('').reverse().join('');
        }
        
        return final;
    }
    /******************************************** decrypt ************************************/
    decrypt(string, key) {
        if( typeof string === "undefined" || typeof key === "undefined") {
            throw new Error('Incorrect arguments!');
        }
        
        let ans;
        let final = '';
        let ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        string =string.toUpperCase();
        key = key.toUpperCase();
        if (this.direction === 'reverse') string = string.split('').reverse().join('');
        //c(key);
        /********************************** NO SPACE  *******************************/
        let noSpaceArr = string.split(' ');
        let noSpaceString = '';
        for (let i in noSpaceArr ) {
            noSpaceString += noSpaceArr[i];
        }
       
        //////////////////////////////////  Enlarge key string //////////////////////////
        if(string.length > key.length) {
           let mult =  Math.floor(string.length / key.length) ;
           let oldKey = key;
           while ( mult > 0 ) {
            key += oldKey;
            mult--;
           }
        
        }
        
        let keyArr = Array.from(key);
        keyArr.forEach((item, i, arr) => {
            arr[i] = ascii.indexOf(item);
            
        });
        
        let stringArr = Array.from(noSpaceString);
        stringArr.forEach((item, i, arr) => {
            arr[i] = ascii.indexOf(item);
        } );

               
        for(let i = 0; i < stringArr.length; i++) {
             
            ans = stringArr[i] - keyArr[i];
            ans = ans < 0 ? ans + 26 : ans;

            stringArr[i] === -1 ? 
                final += noSpaceString[i]
                :
                final += ascii[ans];
        }

        let final_ = '';
        let posInAns = 0;
        for(let i = 0; i <= noSpaceArr.length - 1; i++) {
            final_ += final.slice(posInAns, noSpaceArr[i].length + posInAns);
            final_ += i < noSpaceArr.length - 1 ? ' ' : '';
            posInAns += noSpaceArr[i].length;
        }


      //if (this.direction === 'reverse') final_ = final_.split('').reverse().join('');
            /* let newFinal = '';
            for(let i = final_.length -1; i >= 0; i--) {
                newFinal += final_[i];
            }
            final_ = newFinal;*/  

            
             

        return final_;
      
    }
    
    constructor(dir) {
        this.direction = dir === false ? 'reverse' : 'direct';
    }
    
  }

module.exports = {
  VigenereCipheringMachine
};
