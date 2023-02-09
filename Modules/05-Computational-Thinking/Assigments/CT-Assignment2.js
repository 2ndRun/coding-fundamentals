//write a function that takes a number and returns the perimeter of either a circle or square
//the input will be in a form of (letter, number) where letter will be c for circle or s for square
//number will be the number of side of a square or the radius of a circle

//we cannot use
//if/else/else if/ switch statements
//objects
//arrays
//or formatting methods
//we have to write a branch free code,
//Meaning the code cannot branch apart, using an if statement will branch the code apart,
//as it depends on whether the condition is true or false


function perimeter(l, num) {
    let letter = (l == "s") ? num * 4 : num * 6.28;
//    let s = number * 4
//    let c = 6.28 * number

  return letter
//return (s) * (number * 4) + (c) * (number * 6.28);
letter = ( c ) ? (3.28 * number) : (number * 4)

}

console.log(perimeter("c", 5))


