// Initializing variables to be used in functions to change grid size, and draw color..

let numOfRows = 0
let numOfColumns = 0
let gridSize = 0
let colors = ['rgba(70, 70, 70, 1)', 'rgba(70, 70, 70, .85)']

let selectGridSquare = document.querySelectorAll('.sketch-square')

// Running the function to create the initial grid.

createNewGrid(16)

selectGridSquare.forEach(function (square) {
 	square.addEventListener("mouseover", changeGridColor, {once: true});
})

function changeGridColor (e) {
	const rainbowBox = document.querySelector(".rainbow-box")

	if (!rainbowBox.checked) {
		let pickColor = colors[Math.floor(Math.random() * colors.length)]
	 	e.target.style.backgroundColor = pickColor
	
	} else {
		let red = Math.floor(Math.random() * 255)
		let green = Math.floor(Math.random() * 255)
		let blue = Math.floor(Math.random() * 255)
		e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
	}
}

// This function grabs the grid as a NodeList(array), determines the length of it,
// and then deletes the length of it (oldGrid.length) using a for loop.  This will
// prepare the grid to be populated from the function createNewGrid.

function clearGrid () {
	const oldGrid = document.querySelectorAll(".sketch-square")

	for (let i = 0; i < oldGrid.length; i++) {
		const deleteArea = oldGrid[i]
		deleteArea.remove()
	}
}


function createNewGrid (size) {
	// Setting the variables in :root to size (player entered)
	document.documentElement.style.setProperty('--num-of-rows', size)
	document.documentElement.style.setProperty('--num-of-columns', size)

	// Getting the new value and storing in two variables.
	numOfRows = window.getComputedStyle(document.documentElement).getPropertyValue('--num-of-rows')
	numOfColumns = window.getComputedStyle(document.documentElement).getPropertyValue('--num-of-columns')

	// Multiplying to figure out the new grid size
	gridSize = numOfRows * numOfColumns
	

	// Loop populating the sketch-area with the new divs to create the new grid.

	for (let i = 0; i < gridSize; i++) {
		const newDiv = document.createElement('div')
		newDiv.classList.add('sketch-square')
		document.querySelector("#sketch-area").appendChild(newDiv)
	}

	// Selecting all the new sketch-squares in a Nodelist(array), and adding an event listener to each of them
	// with .forEach.

	selectGridSquare = document.querySelectorAll('.sketch-square')

	selectGridSquare.forEach(function (square) {
 	square.addEventListener("mouseover", changeGridColor);
	})
}


// newGridButton event listener responds when the Change Grid Size button is clicked to clear the grid
// and create a new grid of whatever the user inputs (from 1 to 100).

const newGridButton = document.querySelector(".new-grid")
newGridButton.addEventListener("click", () => {
	let newSize = prompt(`How many rows should the new grid have? (1-100)`)

	if (isNaN(newSize) === true) {
		alert(`Input must be a number.`)
	} else if (newSize < 1 || newSize > 100) {
		alert(`Number must be between 1 and 100.`)
	} else {
		clearGrid()
		createNewGrid(newSize)
	}
})

// This button clears the grid first, then finds the current CSS variable for number of rows and passes it
// through the createNewGrid function to repopulate the grid as the same size.

const clearGridButton = document.querySelector(".clear-grid")
clearGridButton.addEventListener('click', () => {
	clearGrid()
	let getRowsFromCSS = window.getComputedStyle(document.documentElement).getPropertyValue('--num-of-rows')
	createNewGrid(getRowsFromCSS)
})