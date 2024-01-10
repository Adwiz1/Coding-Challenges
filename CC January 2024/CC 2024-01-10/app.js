// Challenge (7 kyu):
// Write a function InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let numStr = num.toString()
    let returnArr = [numStr[0]]
    
     for(let i = 1; i < numStr.length; i++){
       if(numStr[i - 1] % 2 !== 0 && numStr[i] % 2 !== 0){
         returnArr.push('-', numStr[i])
       }else{
         returnArr.push(numStr[i])
       }
     }
    return returnArr.join('')
  }
  