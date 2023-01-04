  //I need a way to convert the given string into ascii (charCodeAt())
  //I need a way to check through the given string for any missing our out of place letters after converting them into ascii
  //65-90 is A-Z in the code 97-122 a-z in the code
  //It needs to determine where the missing letter belongs in
  //return the missing letter
  //it musts start at the start of the string not the alphabet
  //need to make a list of the complete and listed order of the alphabet for them to compare to
  //in the case there is no missing letter return undefined


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function fearNotLetter(str) {
   //i = charcode
   //j = string
   //m = the alphabet that's being compared, it's on 122 because 122 is the decimal of the final letter z, small z is 122 and big Z is 90
    let i = 0
    let j = 0
    let m= 122
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
          //replace string with code if you don't understand.
          //it means if the code from charCode i does not match with the string's char code j
          //then return the missing code's letter 
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            //we don't need to list the entirety of the string, only the missing letter
            //what the code above is doing is scanning through the entirety of the alphabet with i (which is done with the increment of i) 
            //which is capped off at m, and comparing with the given string j (which is progressing through the string with increment of j)
            //hence the code above only lists the event of i's charCode not matching up with the given string's code where it returns the missing code's letter
            i++; j++;
        }
    }
    return undefined;
}

// console.log(fearNotLetter('ACE'));        // "d", in the event of "ACE" it only returns B as the code is only programmed to stop after listing the first missing letter
// console.log(fearNotLetter('bcd'));         // undefined
// console.log(fearNotLetter('bcdefh'));      // "g"
// console.log(fearNotLetter(''));            // undefined
// console.log(fearNotLetter('abcde'));       // undefined
// console.log(fearNotLetter('abcdefghjkl')); // "i"

//string.charCodeAt() returns the ASCII code of any letter in the specified position of the string
// e.g "Hello World"
//string.charCodeAt(1) will return the ASCII code of the letter "e" which is '69' as H is the starting point and it begins at 0

//string.fromcharCode() however, returns the letter of the inputted code
// e.g string.fromcharCode(122) will return 'z' as 'z' has the ASCII code of 122

//string.charAt() will return the letter of the inputted position
// e.g 'Hello World"
// string.charAt(4) will return o


function fearNotLetter(str) {
  i = 0;
  j = 0;
  m = 122;
  if(str) {
    i = str.charCodeAt(0)
    while (i <= m && j < str.length) {
      if (String.fromCharCode(i) !== str.charAt(j)) {
        return String.fromCharCode(i);
      }
      i++; j++;
    } 
  }
   return undefined;
}

console.log(fearNotLetter('ACE'));        // "d", in the event of "ACE" it only returns B as the code is only programmed to stop after listing the first missing letter
console.log(fearNotLetter('bcd'));         // undefined
console.log(fearNotLetter('bcdefh'));      // "g"
console.log(fearNotLetter(''));            // undefined
console.log(fearNotLetter('abcde'));       // undefined
console.log(fearNotLetter('abcdefghjkl')); // "i"













