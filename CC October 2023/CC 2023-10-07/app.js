// Challenge (7 kyu):
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let splitString = str.split('')
    let count = 0
    for(let i = 0; i < str.length; i++){
      if(['a', 'e', 'i', 'o', 'u'].includes(splitString[i]))
        count += 1
    }
    return count
  }