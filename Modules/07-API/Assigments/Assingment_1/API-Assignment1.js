
const quotes = document.getElementsByClassName("quotes")
const thinker = document.getElementsByClassName("author")
const button = document.getElementsByClassName("quote-button")

const ENDPOINT = 'https://api.quotable.io/random'

async function loadQuotes() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return data
}

async function generateQuotes() {
    quotes[0].textContent = " "

    const load = await loadQuotes()
    // console.log(load)
    let content = (load.content)
    // console.log(content)

    quotes[0].innerHTML = content

    let author = (load.author)
    thinker[0].innerHTML = `- ${author}`

}

button[0].addEventListener("click", generateQuotes)