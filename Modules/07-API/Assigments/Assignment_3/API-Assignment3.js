const getInfo = document.getElementById("fetch-me")
const info = document.getElementById("data")


const ENDPOINT = "https://api.github.com/gists/d9315009942cd8ad0f17c4ab5f9e4d47"
//https://gist.githubusercontent.com/2ndRun/d9315009942cd8ad0f17c4ab5f9e4d47/raw/78f2279a9e508d8c89273fa4daa1721a31094fdd/Me.json
//If we are using this ^
//then all we need to add at getData is 'return data'
//this is obtainable from pressing raw at the gist you chose
//BUT this will only give you an outdated version of the gist if it 
//were to be updated. So, we should use the one below

//https://api.github.com/gists/d9315009942cd8ad0f17c4ab5f9e4d47
//this api gist link will get you the updated versions so you won't
//have to go and manually add the new updated link for the gist.
//You can find this link in github docs by searching github gist api
//you will have to type 
//return JSON.parse(data.files['Me.json'].content) 
//instead of 'return data' to specify which gist you wish to get 
//the data from


async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    // return data
    return JSON.parse(data.files['Me.json'].content)
}

// var dots = document.createElement("div");
//         dots.className = "dots";
//         document.body.appendChild(dots);

//when you create an element you can only place it in document
//so you'll need to append it directly to the node you want it to be in

const header = document.createElement("h1")
const year = document.createElement("p")
const enjoy = document.createElement("ul")
info.appendChild(header)
info.appendChild(year)
info.appendChild(enjoy)


function displayData({name, age, hobbies}) {
    header.innerHTML = `Name: ${name}`
    year.innerHTML = `Age: ${age}`

    hobbies.forEach(hobby => {
        enjoy.innerHTML += `
        <li>${hobby}</li>
        `
    });
    
}

getInfo.addEventListener('click', async () => {
    const data = await getData();

    displayData(data)
})    

// window.addEventListener('load', async () => {
//     const data = await getData();

//     getInfo.addEventListener('click', displayData(data))
    
// })

//fetch the data in async function
//make a function the pulls out the data you want
//add an eventListener that loads the collected data and runs
//the function that pulls out the data to display it
