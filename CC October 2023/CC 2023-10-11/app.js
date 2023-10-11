// Challenge (8 kyu):
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump / mpg > fuelLeft){
      return false
    }else return true
  };
  
// Cleaner one line solution.
//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump/mpg <= fuelLeft
//   }

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
    let teamPoints = 0
    for(let i = 0; i < games.length; i++){
      if(games[i][0] > games[i][2]){
        teamPoints += 3
      }
      else if(games[i][0] === games[i][2]){
        teamPoints += 1
      }
    }
    return teamPoints
  }