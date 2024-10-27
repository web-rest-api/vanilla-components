export const buttonComp = (text, className, onclick) => {
	const button = document.createElement("button")
	button.innerText = text
	button.classList.add("btn")
	button.classList.add(className)
	button.addEventListener("click", () => {
		onclick()
	})
	return button
}
