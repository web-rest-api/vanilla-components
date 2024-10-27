export function clickOne() {
	result++
	updateDOMResult(result)
}

export function clickTwo() {
	result--
	updateDOMResult(result)
}

export function clickThree() {
	result = 0
	updateDOMResult(result)
}

/**
 *
 * @param {number} result
 * @returns {void}
 */
export function updateDOMResult(result) {
	document.querySelector(".result").textContent = result
}
