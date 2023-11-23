// Challenge (7 kyu):
// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    let splitString = str.split('')
    let result = splitString.filter((letter) => !['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(letter)).join('')
    return result
  }

  // Cleaner solution with regex
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }