const navegation = document.querySelector(".navegation")

window.addEventListener("scroll", function() {
    navegation.classList.toggle("sticky", window.scrollY > 0)
})