const containerDiv = document.querySelector(".container")
const numberOfSquaresX = 16
const numberOfSquaresY = 16
const squareDivHeight = "20px"

const numberOfSquares = numberOfSquaresX * numberOfSquaresY
const containerDivHeight = `${numberOfSquaresX * 20}px`
const containerDivWidth = `${numberOfSquaresY * 20}px`
console.log(containerDivHeight)
containerDiv.style.height = containerDivHeight
containerDiv.style.width = containerDivWidth

for (let i = 0; i < numberOfSquares; i++) {
    const squareDiv = document.createElement("div")
    squareDiv.style.backgroundColor = "white"
    squareDiv.style.width = squareDivHeight
    squareDiv.style.height = squareDivHeight
    squareDiv.style.borderStyle = "solid"
    squareDiv.style.borderWidth = "1px"
    containerDiv.appendChild(squareDiv)
}

