const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const hambIcon = document.querySelector(".fa-solid");
const logo = document.querySelector(".logo");

/* NAVIGATION MENU */
hamburger.addEventListener("click", () => {
    navBar.classList.toggle("active");

    if (hambIcon.classList[2] === "fa-bars") {
        hambIcon.classList.remove("fa-bars");
        hambIcon.classList.add("fa-xmark");
    } else {
        hambIcon.classList.remove("fa-xmark");
        hambIcon.classList.add("fa-bars");
    }
});

/* LOGO ANIMATION */
logo.addEventListener("mouseover", () => {
    logo.classList.add("rotate");
});

logo.addEventListener("mouseout", () => {
    logo.classList.remove("rotate");
});
