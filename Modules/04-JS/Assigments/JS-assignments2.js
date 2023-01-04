
    // your code
    function calculateAge(olddate) {
        let formattedDate = olddate.split("/")

        //what the code here did is it split the given date so it could be read easier
        //and set the old date as the new Date

        let birthdateTimeStamp = new Date(formattedDate[2],[1], formattedDate[0])

        //so now current date and the subsequent code will use the given date (olddate) as the basis instead of January 1, 1970
        //so here it get the milliseconds of the current date

        let currentDate = new Date().getTime();

        //and calculates the difference between the latest date and the given date

        let difference = currentDate - birthdateTimeStamp;

        //after which it proceeds to find number of years by dividing the calculated difference with how many
        //milliseconds there are in a year (which is 31557600000 rounded up)

        let currentAge = Math.floor(difference/31557600000)
        // dividing by 1000*60*60*24*365.25
        return currentAge}


//2022-2002 = 20
//2022-1979 = 43
console.log(calculateAge("20/7/2002") === 20)
console.log(calculateAge("1/1/1979") === 43)

//.split will split the given string up by using the inputed term
// e.g let text= "How are you today?"
// const myArray = text.split(" ");
//will return "How,are,you,today?"
// e.g let text= "How/are/you/today?"
// const myArray = text.split("/");
//will return "How,are,you,today?"

//new Date() returns a date object with the current date and time

//.getTime will return the amount of milliseconds since January 1, 1970

