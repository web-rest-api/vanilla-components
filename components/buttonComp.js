/**
 *
 * @param {string} text // text to show inside the button
 * @param {string} className // optional class to customize each button
 * @param {function} onclick // function to be called when the button is clicked
 * @returns {HTMLButtonElement}
 */

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
