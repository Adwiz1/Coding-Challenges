// Challenge (8 kyu):
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
    let repeatStr = ''
    for(let i = 0; i < str.length; i++){
      repeatStr += str[i] + str[i]
    }
    return repeatStr
  }