const toggleMenu = () => {
    const menuLink = document.querySelector(".menu-links")
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    menuLink.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
}