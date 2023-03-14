const fakeout = document.getElementsByClassName("fade-out")
const fakein = document.getElementsByClassName("fade-in")
const palette = document.getElementsByClassName("palette")


document.addEventListener("keydown", (event) => {
    console.log("keydown", event)


    if (event.ctrlKey && event.key === "k" || event.ctrlKey && event.key === "K" ) {
        event.preventDefault();
        palette[0].classList.toggle("fade-in")
        palette[0].classList.toggle("fade-out")
        if (palette[0].classList.contains("fade-out")){
            palette[0].setAttribute("style", "display: none")
        } else if (palette[0].classList.contains("fade-in")) {
            palette[0].setAttribute("style", "display: block")
        }
    }

})
