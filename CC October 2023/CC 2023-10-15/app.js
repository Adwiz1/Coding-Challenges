// Challenge (7 kyu):
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let splitStr = str.split(' ')
    for(let i = 0; i < splitStr.length; i++){
      splitStr[i] = splitStr[i].split('').reverse().join('')
    }
    return splitStr.join(' ')
  }