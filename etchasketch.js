// CHANGE NUMBER OF SQUARES HERE
const numberOfSquaresX = 30

// CALCULATE CONTAINER DIV VARIABLES
const numberOfSquaresY = numberOfSquaresX
const numberOfSquares = numberOfSquaresX * numberOfSquaresY
let squareDivHeight = 0
if (numberOfSquaresX >= 70) {
    squareDivHeight = 8
}
else if (numberOfSquaresX >= 50) {
    squareDivHeight = 12
}
else if (numberOfSquaresX >= 30) {
    squareDivHeight = 16
}
else {
    squareDivHeight = 24
}
const containerDivHeight = `${numberOfSquaresX * squareDivHeight}px`
const containerDivWidth = `${numberOfSquaresY * squareDivHeight}px`

// SET UP MOUSE STATE and EVENTS
let mouseState = false

function applyColor(e) {
    if (mouseState) {
        this.classList.add("sketched")
    }
}

function setMouseDown(e) {
    mouseState = true
    this.classList.add("sketched")
} 

function setMouseUp(e) {
    mouseState = false
}

// GENERATE CONTAINER DIV DOM ELEMENTS AND EVENTS
const containerDiv = document.querySelector(".container")
containerDiv.style.height = containerDivHeight
containerDiv.style.width = containerDivWidth
for (let i = 0; i < numberOfSquares; i++) {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("squareDiv")
    squareDiv.style.width = `${squareDivHeight}px`
    squareDiv.style.height = `${squareDivHeight}px`
    squareDiv.style.borderWidth = "0.1px"
    squareDiv.setAttribute("draggable", false)
    squareDiv.addEventListener("mousedown", setMouseDown)
    squareDiv.addEventListener("mouseover", applyColor)
    containerDiv.appendChild(squareDiv)
}
window.addEventListener("mouseup", setMouseUp)
