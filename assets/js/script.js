const navegation = document.querySelector("header nav")

window.addEventListener("scroll", function() {
    navegation.classList.toggle("sticky", window.scrollY > 0)
})