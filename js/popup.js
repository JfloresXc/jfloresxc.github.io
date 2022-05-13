const popup = document.querySelector(".popup");
const popupShowClass = document
	.querySelectorAll(".popup__button")
	.forEach((element) => {
		element.addEventListener("click", () => {
			popup.classList.add("popup__show");
		});
	});

popup.addEventListener("click", (e) => {
	if (e.target.id == "popup") {
		popup.classList.remove("popup__show");
	}
});
