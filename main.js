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
	updateDOMResult(result)
}

function clickTwo() {
	result--
	updateDOMResult(result)
}

function clickThree() {
	result = 0
	updateDOMResult(result)
}

/**
 *
 * @param {number} result
 * @returns {void}
 */
function updateDOMResult(result) {
	document.querySelector(".result").textContent = result
}
