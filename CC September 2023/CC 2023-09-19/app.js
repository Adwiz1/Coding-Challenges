// Challenge (7 kyu):
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let checkStr = str.toLowerCase().split('')
    let xStr = 0
    let oStr = 0
    for (i = 0; i < str.length; i++){
       if(checkStr[i] === 'x')
        xStr += 1
      else if(checkStr[i] === 'o')
        oStr += 1
    }
    if(xStr === oStr){
      return true
    }
    return false
  }


// Cleaner solution from solutions using filter.
//    const XO = str => {
//    str = str.toLowerCase().split('');
//    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
//      }