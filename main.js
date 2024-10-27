"use strict"

const buttonComp = () => {
	const button = document.createElement("button")
	button.innerText = "click"
	button.classList.add("btn")
	button.addEventListener("click", () => {
		console.log("clicked the btn !!")
	})
	return button
}

app.appendChild(buttonComp())
app.appendChild(buttonComp())
app.appendChild(buttonComp())
