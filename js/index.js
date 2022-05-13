window.addEventListener("scroll", (e) => {
	const navbar = document.querySelector(".navbar");
	navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navbarMenu = document.querySelector(".navbar__menu");
const navbarLinks = document.querySelector(".navbar__links");
navbarMenu.addEventListener("click", () => {
	navbarMenu.classList.toggle("navbar__menu-open");
	navbarLinks.classList.toggle("navbar__links-show");
});
