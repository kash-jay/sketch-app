let gridSize = 50;

// let draw = false;

// function colorSquare() {
//     if (draw) {

//     }
// }

function createGrid(gridSize){
    const grid = document.querySelector('.grid');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row)
    }
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('onclick', function() {
        square.style.cssText = "padding: 20px;";
    });
})





createGrid(gridSize);
