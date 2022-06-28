// CHANGE NUMBER OF SQUARES HERE
let numberOfSquaresX = 16

// CALCULATE CONTAINER DIV VARIABLES
let numberOfSquaresY = numberOfSquaresX
let numberOfSquares = numberOfSquaresX * numberOfSquaresY
let squareDivHeight = 0
if (numberOfSquaresX >= 70) {
    squareDivHeight = 4
}
else if (numberOfSquaresX >= 50) {
    squareDivHeight = 6
}
else if (numberOfSquaresX >= 30) {
    squareDivHeight = 8
}
else {
    squareDivHeight = 20
}
let containerDivHeight = `${numberOfSquaresX * squareDivHeight}px`
let containerDivWidth = containerDivHeight

function generateContainerValues(squaresNum) {
    numberOfSquaresX = squaresNum
    numberOfSquaresY = numberOfSquaresX
    numberOfSquares = numberOfSquaresX * numberOfSquaresY
    if (numberOfSquaresX >= 70) {
        squareDivHeight = 5
    }
    else if (numberOfSquaresX >= 45) {
        squareDivHeight = 8
    }
    else if (numberOfSquaresX >= 30) {
        squareDivHeight = 12
    }
    else {
        squareDivHeight = 18
    }
    containerDivHeight = `${numberOfSquaresX * squareDivHeight}px`
    containerDivWidth = containerDivHeight
}

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

function removeAllChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function generateNewContainer() {
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
}


// GENERATE CONTAINER DIV DOM ELEMENTS AND EVENTS
const containerDiv = document.querySelector(".container")
generateNewContainer()

window.addEventListener("mouseup", setMouseUp)
const gridSlider = document.querySelector(".gridSlider")
const gridLabel = document.querySelector(".gridLabel")
gridSlider.oninput = function() {
    generateContainerValues(this.value)
    removeAllChildren(containerDiv)
    generateNewContainer()
    gridLabel.textContent = `Grid Size: ${this.value}x${this.value}`
    
}

const clearButton = document.querySelector(".clearButton")
clearButton.addEventListener("click", () => {
    removeAllChildren(containerDiv)
    generateNewContainer()
})