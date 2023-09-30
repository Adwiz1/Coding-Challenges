// Challenge (8 kyu):
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++)
      if(Math.sign(arr[i]) === 1){
        sum += arr[i]
      }
        return sum
  }
  
// Challenge (6 kyu):
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    return text.toUpperCase().split('').filter(char => /[A-Z]/.test(char)).map(char => char.charCodeAt(0) - 64).join(' ')
  }