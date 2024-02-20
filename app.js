const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))


function redirectTolink() {
    window.open("https://www.linkedin.com/in/iqbal-wijaya-2b76a2254", "_blank");
}

function fiver() {
    window.open("https://www.fiverr.com/caysupp?up_rollout=true", "_blank")
}

