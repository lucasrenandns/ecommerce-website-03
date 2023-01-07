const navegation = document.querySelector(".navegation")
const scrollArrow = document.getElementById("scroll-arrow")

window.addEventListener("scroll", function() {
    navegation.classList.toggle("sticky", window.scrollY > 0)
})

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)   
})

function hiddenScrollArrow() {
    if(window.scrollY < 500) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}
window.addEventListener("scroll", hiddenScrollArrow)
hiddenScrollArrow()