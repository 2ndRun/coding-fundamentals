function generation(generation, gender) {
    let phrase = " "
    let adult =" "
    let child = " "

    if (gender == "m") {
        adult = "father"
        child = "son" 
    } else if (gender == "f") {
        adult = "mother"
        child = "daughter"
    }

   if (generation == -3) {
    return phrase = `Great Grand${adult}`
   } else if (generation == -2) {
    return phrase = `Grand${adult}`
   } else if (generation == -1) {
    return phrase = `${adult}`
   }

   if (generation == 1) {
    return phrase = `${child}`
   } else if (generation == 2) {
    return phrase = `Grand${child}`
   } else if (generation == 3) {
    return phrase = `Great Grand${child}`
   }

   if (generation == 0) {
    return "Me!"
   }
    
}
console.log(generation(0, "m" ))


     // if (generation = 0) {
    //     return "Me!"
    // } 
    //do something like 1 = son/father, 2 = (grand)son/(grandfather), 3 = (great-grand)son/(great-grand)father
    //list possibilities where it depends on whether the number is negative or not to see if we have to call them father or son
    
    //where the difference between son or father is if x is greater or smaller than 0
    //return me if x = 0

