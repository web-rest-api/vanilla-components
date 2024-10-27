"use strict"
import { buttonComp } from "./components/buttonComp.js"

app.appendChild(buttonComp("click", "btn-primary", clickOne))
app.appendChild(buttonComp("test", "btn-secondary", clickTwo))
app.appendChild(buttonComp("test deux", "btn-danger", clickThree))

function clickOne() {
	console.log("click button one!")
}

function clickTwo() {
	console.log("click button two!")
}

function clickThree() {
	console.log("click button two!")
}
