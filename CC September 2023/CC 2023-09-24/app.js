// Challenge (8 kyu):
//Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.

function booleanToString(b){
    return (`${b}`)
  }

// Challenge (8 kyu):
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//Notes
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.//

function makeNegative(num) {
    if(Math.sign(num) === 1){
      return -num
    }
    return num
  }

//Potentially cleaner answer from 'return -Math.abs(num)' found in solutions.