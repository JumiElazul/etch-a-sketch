for (let i = 0; i < 16; i++) {
	const newDiv = document.createElement('div')
	newDiv.classList.add('sketch-square')
	document.querySelector("#sketch-area").appendChild(newDiv)
}

function clearGrid () {
	const oldGrid = document.querySelectorAll(".sketch-square")

	for (let i = 0; i < oldGrid.length; i++) {
		const deleteArea = oldGrid[i]
		deleteArea.remove()
	}
}

function createNewGrid (size) {
	for (let i = 0; i < size; i++) {
		const newDiv = document.createElement('div')
		newDiv.classList.add('sketch-square')
		document.querySelector("#sketch-area").appendChild(newDiv)
	}
}

const newGrid = document.querySelector(".new-grid")
newGrid.addEventListener("click", () => {
	let newSize = prompt(`How many rows should the new grid have?`)

	if (isNaN(newSize) === true) {
		console.log(`Please enter a number between 1 and 20.`)
	} else if (newSize < 1 || newSize > 20) {
		console.log(`Number must be between 1 and 20.`)
	} else {
		clearGrid()
	}
})