const form = document.querySelector('.form')
const query = document.querySelector('#input')
const userInfo = document.querySelector('.user-info')
const notFound = document.querySelector('.error-text')
const image = document.querySelector(".image-style")
const information = document.querySelector(".user-style")
const userName = document.querySelector(".login")
const aboutMe = document.querySelector(".bio")
const dateJoined = document.querySelector(".date")

//Base

//We don't do something like this as the api's work differently
//The emoji api has all the images inside it already, meanwhile the github user
//Api requires extra information in the form of the username to look it up
/////////////////////////////////////////////////////////
// const ENDPOINT = 'https://api.github.com/emojis'
// //Base
// async function getEmojis() {
//     const response = await fetch(ENDPOINT)
//     const data = await response.json()

//     return data
// }
/////////////////////////////////////////////////////////

form.addEventListener('submit', e => {
    e.preventDefault()
    const lookUp = query.value
    const fullName = lookUp.split(' ').join('')
    ENDPOINT = ("https://api.github.com/users/"+fullName)

    //I am assuming this is the equivalent of response, awaiting and data
    fetch(ENDPOINT)
    .then((result) => result.json())
    .then((data) =>{
        console.log(data)

        image.innerHTML = `
        <img src="${data.avatar_url}" style = "width: 9rem; height: 9rem; border-radius: 100px;"/>
        `
        userName.innerHTML = `
        ${data.login}
        `
        // aboutMe.innerHTML = `
        // ${data.bio} 
        // `
        if (data.bio == null) {
            aboutMe.innerHTML = "This user has not set their bio."
        } else {
            aboutMe.innerHTML = `
        ${data.bio} `
        }

        let test = data.created_at
        console.log(test)
        let date = new Date(test)
        console.log(date)
        let year = date.getFullYear()
        let month = date.toLocaleString('default', { month: 'short' })
        let day = date.getDay()
        console.log(month)

        dateJoined.innerHTML = `
        Joined at: ${day} ${month} ${year}
        `

    })
})



// let date = test.split("-", 3);
// let proper = new Date(date[0], date[1], date[2])
// console.log(date)


//make a function that takes the values of searchBar and 
//use it to look for a user's profile form the ENDPOINT
//return the information (photo, name, description, date of joining)