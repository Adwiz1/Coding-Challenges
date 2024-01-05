// Challenge (8 kyu):
// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Original
// function removeChar(str){
//     let returnStr = str.split('')
//     returnStr = returnStr.slice(1,str.length - 1).join('')
//     return returnStr
//   }
  
//Condensed version
function removeChar(str){
    return str.split('').slice(1,str.length - 1).join('')
  }

//Can be shortened to just
// function removeChar(str) {
//     return str.slice(1, -1);
//   }