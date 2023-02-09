function getDays(firstDate, secondDate) {

  let newDateA = new Date (firstDate)
  let newDateB = new Date (secondDate)

  let finalTime = Math.abs(newDateB.getTime() - newDateA.getTime());
  let calculatedDay = Math.abs(finalTime/86400000)
  
  //   The formula for converting milliseconds into the days is below
  // (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours) which equals to 86,400,000
  return calculatedDay
  } 
  
  console.log(getDays('April 4, 2023', 'Febuary 31, 2023'))