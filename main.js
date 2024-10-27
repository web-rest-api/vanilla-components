"use strict"
import { buttonComp } from "./components/buttonComp.js"
import { showResult } from "./components/showResult.js"

let result = 0

app.appendChild(buttonComp("click", "btn-primary", clickOne))
app.appendChild(buttonComp("test", "btn-secondary", clickTwo))
app.appendChild(buttonComp("test deux", "btn-danger", clickThree))

app.appendChild(showResult(result))

function clickOne() {
	result++
	document.querySelector(".result").textContent = result
}

function clickTwo() {
	result--
	document.querySelector(".result").textContent = result
}

function clickThree() {
	result = 0
	document.querySelector(".result").textContent = result
}
