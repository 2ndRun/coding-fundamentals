//Break Down the problem
//Recognise the pattern
//Data Representation and Abstraction / Find out which part of the data in the problem is important and which one isn't
//Algorithm / Step by step instructions on how to solve the given problem, must be simple to understand


function possibleBonus(a, b) {
    //check the postion of the two players
    //check if it is possible to reach the same tile as the other player ahead within 6 tiles
    //if yes, return true if no return false
    //if ahead return false
    //if starting on same position return false
    let playerA = a
    let playerB = b

    for (let i = 1; i <= 6; i++) {
        playerA += 1;
        if (playerA === playerB) {
            return true
        }
    }
    return false;
}

//solution sometimes is way more simpler than you think.

console.log(possibleBonus(9, 5))