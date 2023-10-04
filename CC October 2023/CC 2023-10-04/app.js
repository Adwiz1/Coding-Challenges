// Challenge (8 kyu):
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0))
  }

//Clever solution just checks if the combination of the two is odd since an even and odd must always be odd.
//   function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 === 1
//   }