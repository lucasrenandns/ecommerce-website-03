// Strict mode
"use strict"

// Normal scroll
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

window.addEventListener("scroll", function() {
    hiddenScrollArrow()
    navBar.classList.remove("open")
    menuIcon.classList.remove("bx-x")
})

function hiddenScrollArrow() {
    if(window.scrollY < 500) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}
hiddenScrollArrow()

// Animation scroll
ScrollReveal().reveal(".home-text", {reset: true, distance: "60px", duration: 2100, delay: 200, origin: "top"})
ScrollReveal().reveal(".home-image", {reset: true, distance: "60px", duration: 2100, delay: 300, origin: "top"})
ScrollReveal().reveal(".feature, .product, .cta, .contact", {reset: true, distance: "60px", duration: 2100, delay: 200, origin: "bottom"})