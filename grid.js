const grid = document.querySelector('.grid');

const gridSize = grid.clientWidth * grid.clientHeight;

let numSquares = 256;

const padding = gridSize/numSquares;

for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.padding = padding;
    grid.appendChild(square);
}
