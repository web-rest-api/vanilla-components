"use strict"
import { buttonComp } from "./components/buttonComp.js"
import { showResult } from "./components/showResult.js"
import { clickOne, clickThree, clickTwo } from "./utils/functions.js"

window.result = 0

app.appendChild(buttonComp("Add", "btn-primary", clickOne))
app.appendChild(buttonComp("Subtract", "btn-secondary", clickTwo))
app.appendChild(buttonComp("Reset", "btn-danger", clickThree))

app.appendChild(showResult(result))
