// Challenge (7 kyu):
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(n) {
    for (var i = 1; i < arguments.length; i++) {
      if (n % arguments[i]){
        return false
      }
    }
    return true
  }