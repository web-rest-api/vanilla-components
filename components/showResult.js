export const showResult = (result) => {
	const divCont = document.createElement("div")
	divCont.classList.add("result")
	divCont.textContent = result
	return divCont
}
