function factorial(anyNumber){  
    // your code
    let total = 1;

    //since i has to = to 1 otherwise the equation would *0 in the end
    //i < anyNumber has to have a +1 too
    for (let i = 1; i < anyNumber +1; i++) {
        total = total * i 
    }
    return total;
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)

//
//
//