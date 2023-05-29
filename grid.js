let gridSize = 50;

let draw = true;

function colorSquare(event) {
    const square = event.target;
    console.log("Changing color");
    if (draw) {
        square.style.backgroundColor = 'white';
    }
}

function createGrid(gridSize){
    const grid = document.querySelector('.grid');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', colorSquare)
            
            row.appendChild(square);
        }
        grid.appendChild(row)
    }
}

createGrid(gridSize);



