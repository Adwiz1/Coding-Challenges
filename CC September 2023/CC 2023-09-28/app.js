// Challenge (7 kyu):
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    let builderString = ""
    let splitDNA = dna.split('')
    for(let i = 0; i < dna.length; i++){
      if(splitDNA[i] === "A"){
        builderString += "T"
      }
      else if(splitDNA[i] === "T"){
        builderString += "A"
      }
      else if(splitDNA[i] === "C"){
        builderString += "G"
      }
      else if(splitDNA[i] === "G"){
        builderString += "C"
      }
        
    }
    return builderString
  }
  
  //After looking at other solutions this should be done using switch cases and map like below:

  function DNAStrand(dna){
    let convert = {
      'A':'T',
      'T':'A',
      'G':'C',
      'C':'G'
    }
    return dna.split("").map(x => convert[x]).join("")
  }