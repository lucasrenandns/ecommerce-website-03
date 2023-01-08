const navegation = document.querySelector(".navegation")
const scrollArrow = document.getElementById("scroll-arrow")
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

window.addEventListener("scroll", function() {
    navegation.classList.toggle("sticky", window.scrollY > 0)
})

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)   
})

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    menuIcon.classList.toggle("bx-x")
})

function hiddenScrollArrow() {
    if(window.scrollY < 500) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}

window.addEventListener("scroll", function() {
    hiddenScrollArrow()
    navBar.classList.remove("open")
    menuIcon.classList.remove("bx-x")
})
hiddenScrollArrow()