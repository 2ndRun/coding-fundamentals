// Select the header element
const header = document.getElementsByClassName("navbar")
const test = document.getElementById("test")
// Event listener: Scroll
// When user scroll after a certain height, hide the header, else show the header

test.style.backgroundColor = "transparent"

document.addEventListener("scroll", e =>{

    if (window.scrollY > 700) {
        e.preventDefault()
        header[0].classList.add("slide-out")
        header[0].classList.remove("slide-in")
        header[0].style.visibility = "none"
    // } else if (window.scrollY > 700 && ) {

    } else if (window.scrollY < 700) {
        e.preventDefault()
        header[0].style.visibility = "visible"
        header[0].classList.add("slide-in")
        header[0].classList.remove("slide-out")
    }


})

if (window.pageYOffset < 300) {
    header[0].style.setProperty("visibility", "visible")
    header[0].classList.remove("slide-out")
    header[0].classList.add("slide-in")
} else if (window.pageYOffset > 300) {
    test.addEventListener("mouseover", e => {
    header[0].style.visibility = "visible"
    header[0].classList.add("slide-in")
    header[0].classList.remove("slide-out")
    });

    test.addEventListener("mouseout", e => {
        if (window.pageYOffset > 300) {
            header[0].classList.add("slide-out")
            header[0].classList.remove("slide-in")
            header[0].style.visibility = "none"
        } else if (window.pageYOffset < 300) {

        }
    
   
});
}




// if (window.pageYOffset > 300) {
//     test.addEventListener("mouseover", e => {
//         header[0].style.visibility = "visible"
//         header[0].classList.add("slide-in")
//         header[0].classList.remove("slide-out")
//         });
    
//         test.addEventListener("mouseout", e => {
//         header[0].classList.add("slide-out")
//         header[0].classList.remove("slide-in")
//         header[0].style.visibility = "none"
//     });
//     } else if (window.pageYOffset < 300){
//         header[0].setProperty("visibility", "visible", "important")
//     }








// put an event listener into an if statement
// if (window.scrollY > 700) {
//     test.addEventListener("mouseover", e => {
//         header[0].style.display = "flex"
//         header[0].classList.add("slide-in")
//         header[0].classList.remove("slide-out")
//     });

//     test.addEventListener("mouseout", e => {
    //         header[0].classList.add("slide-out")
    //         header[0].classList.remove("slide-in")
    //         header[0].style.visibility = "none"
    //     });
    // } else if (window.scrollY < 300) {
        //     header[0].style.display= "flex"
// }





// Event listener: Mouse move
//onmousemove event is relative to to the top of the browser not the page
// When user hovers around the top area, show the header
// if (window.scrollY > 300) {
//     test.addEventListener("mouseover", e => {
//         header[0].style.visibility = "visible"
//         header[0].classList.add("slide-in")
//         header[0].classList.remove("slide-out")
//     });

//     test.addEventListener("mouseout", e => {
//         header[0].classList.add("slide-out")
//         header[0].classList.remove("slide-in")
//         header[0].style.visibility = "none"
//     });
// } else if (window.scrollY < 300) {
//     test.addEventListener("mouseout", e => {
//         header[0].style.visibility = "visible"
//     });
// }
