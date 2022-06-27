const containerDiv = document.querySelector(".container")
const numberOfSquaresX = 16
const numberOfSquaresY = 16
const squareDivHeight = 40

const numberOfSquares = numberOfSquaresX * numberOfSquaresY
const containerDivHeight = `${numberOfSquaresX * squareDivHeight}px`
const containerDivWidth = `${numberOfSquaresY * squareDivHeight}px`
containerDiv.style.height = containerDivHeight
containerDiv.style.width = containerDivWidth

for (let i = 0; i < numberOfSquares; i++) {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("squareDiv")
    squareDiv.style.width = `${squareDivHeight}px`
    squareDiv.style.height = `${squareDivHeight}px`
    squareDiv.style.borderWidth = "0.1px"
    containerDiv.appendChild(squareDiv)
}

