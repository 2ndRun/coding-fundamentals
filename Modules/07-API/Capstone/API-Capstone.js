//use a for loop or forEach loop to list out all the 67 cats in cards
//each card should have image, description and a Profile button in that order
//some of these image links are broken or  outdated, write code that replaces the unusable ones with placeholder images

const cardContainer = document.getElementById("cards")


//coding api bnb (bread and butter)
const ENDPOINT = "https://api.thecatapi.com/v1/breeds"

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    
    return data
    // console.log(data)
}

//instead of putting the function in the loop, try putting the
//loop in the function
//not .map()





function displayData({name, description, reference_image_id}) {
    console.log(name)
    console.log(description)
    let infoCard = document.createElement('div')
    infoCard.id = "card__demo"

    infoCard.innerHTML = `
    <img id="img__link" src="https://cdn2.thecatapi.com/images/${reference_image_id}.jpg" onerror="this.onerror=null; this.src='https://media1-production-mightynetworks.imgix.net/asset/55741260/1679051561667.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format'">
    <h3 id="name">${name}</h3>
    <p id="description">${description}</p>
    <button id="profile">Profile</button>
    `
    
    cardContainer.appendChild(infoCard)
    
}
    
    // image.onerror = function () {
    //     image.src = "https://media1-production-mightynetworks.imgix.net/asset/55741260/1679051561667.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format"
    // }
    




window.addEventListener('load', async () => {
    const data = await getData();
    // displayData(data)
    data.forEach((cat) =>{
        console.log(cat)
        displayData(cat)

    })
})


 