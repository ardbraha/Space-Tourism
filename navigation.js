// Expanding hamburger menu

const nav = document.querySelector (".primaryNavigation");
const navToggle = document.querySelector (".mobileNavToggle")

// When someone touches the hamburger menu // Function starts here
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})