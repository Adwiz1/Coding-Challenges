// Challenge (7 kyu):
//Given the triangle of consecutive odd numbers:

//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

//1 -->  1
//2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
  }

// Challenge (7 kyu):
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//Examples:(Input --> Output)

//121 --> 144
//625 --> 676
//114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 != 0){
      return -1
    }
    else return Math.pow((Math.sqrt(sq)+1), 2)
  }


//Clean solution with switch case
//function findNextSquare(sq) {
//return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
//}