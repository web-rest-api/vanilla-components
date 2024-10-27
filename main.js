"use strict"

const buttonComp = document.createElement("button")
buttonComp.innerText = "click"
buttonComp.classList.add("btn")
buttonComp.addEventListener("click", () => {
	console.log("clicked the btn !!")
})

app.appendChild(buttonComp)
