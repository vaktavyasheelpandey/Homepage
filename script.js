





function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}










// Typewriter effect

var typed = new Typed(".typewriter-text",
    {
        strings: ["WEB DEVELOPER", "WEB DESIGNER", "CODER"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    }
)