const menuButton = document.querySelector(".menu-button span")
const mainNav = document.querySelector(".main-nav")
menuButton.addEventListener("click", (e) => {
  mainNav.classList.toggle("display-nav")
})
