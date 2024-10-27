"use strict"
import { buttonComp } from "./components/buttonComp.js"
import { showResult } from "./components/showResult.js"
import { clickOne, clickThree, clickTwo } from "./utils/functions.js"

window.result = 0

app.appendChild(buttonComp("click", "btn-primary", clickOne))
app.appendChild(buttonComp("test", "btn-secondary", clickTwo))
app.appendChild(buttonComp("test deux", "btn-danger", clickThree))

app.appendChild(showResult(result))
