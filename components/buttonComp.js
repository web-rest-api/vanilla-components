export const buttonComp = (text) => {
	const button = document.createElement("button")
	button.innerText = text
	button.classList.add("btn")
	button.addEventListener("click", () => {
		console.log("clicked the btn !!")
	})
	return button
}