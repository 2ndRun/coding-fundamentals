function tetra(n) {  
    // your code
    let total = 0;
    for (let i = n; i > 0; i--) {
        //this is the formula for the tetra number
        total += (i * (i + 1))/2; 
    }
    return total;
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)