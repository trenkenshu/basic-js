const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  //c('------------------------------------------------\n arr is '+arr);
  if( !Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let skip;
  let ans = [];
  let final = [];

  for(let key = 0; key < arr.length; key++) {
   
    if(arr[key] === '--discard-next') {
      ans[key] = 'removeMe';
      ans[key+1] = 'removeMe';
      //c('discarging next: '+ans);
      skip = key+1;
      
      
    } else if(arr[key] === '--discard-prev') {
      ans[key] = 'removeMe';
      arr[key-1] ? ans.splice(key-1, 1) : true;
      //c(ans);
      
    } else if(arr[key] === '--double-next' ) {
      ans[key] = 'removeMe';
      arr[key+1] ? ans[key] = arr[key+1] : true;
      //c(ans);
      
    } else if(arr[key] === '--double-prev') {
      //c('doubling prev: ans '+ans+' arr key-1 '+arr[key-1]+' key is '+key);
      key-1 != skip && arr[key-1] ? ans[key] = arr[key-1] : ans[key] = 'removeMe';
      
      
    } else if(ans[key] !== 'removeMe') {
      ans[key] = arr[key];
    }
    // c('ans on key '+key+': '+ans); 
  }
    //c('ans final: '+ans);
    
  for(let i in ans) {
      if(ans[i] !== 'removeMe') { 
        final.push(ans[i]); 
      } 
    };
    
  return final;
}

module.exports = {
  transform
};
