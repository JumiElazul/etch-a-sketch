document.documentElement.style.setProperty('--num-of-rows', 16);
document.documentElement.style.setProperty('--num-of-columns', 16);

let startingGrid = 256

for (let i = 0; i < startingGrid; i++) {
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
		alert(`Input must be a number.`)
	} else if (newSize < 1 || newSize > 20) {
		alert(`Number must be between 1 and 20.`)
	} else {
		clearGrid()
	}
})