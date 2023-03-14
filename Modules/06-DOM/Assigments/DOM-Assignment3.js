const registering = document.getElementById('register');
const hidden = document.getElementsByClassName("wrapper");
const exit = document.getElementsByClassName("close-button")

//Both of these works but hidden[0].style.display is better as it doesn't run the
//risk of erasing and/or replacing the previous stylings or attributes
hidden[0].style.display = "none";
// hidden[0].setAttribute("style", "display: none")
hidden[0].classList.add("slide-out")

registering.addEventListener('click', (event) => {
    event.preventDefault();
    hidden[0].classList.toggle("slide-in");
    hidden[0].classList.toggle("slide-out");
    hidden[0].style.display = "block";
    // hidden[0].setAttribute("style", "display: block")
})

exit[0].addEventListener('click',e => {
    e.preventDefault();
    hidden[0].classList.toggle("slide-in")
    hidden[0].classList.toggle("slide-out");
    hidden[0].style.display = "none";
    // hidden[0].setAttribute("style", "display: none")
} )