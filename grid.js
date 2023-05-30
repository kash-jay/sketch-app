let draw = false;
// let color = 'white';

var slider = document.getElementById('slider');
var sliderVal = document.querySelector('.slider-text');
let gridSize = slider.value;
var sliderContainer = document.querySelector('.slider-container');

var colorPicker = document.getElementById('color');
let color = colorPicker.value;
colorPicker.style.borderColor = color;

colorPicker.oninput = function() {
    color = colorPicker.value;
    colorPicker.style.borderColor = color;
}

slider.oninput = function() {
    gridSize = slider.value;
    sliderVal.textContent = gridSize + "x" + gridSize;
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });
    createGrid(gridSize);
}

function setDraw() {
    draw = true;
}

function resetDraw() {
    draw = false;
}

function colorSquare(event) {
    const square = event.target;
    if (draw) {
        square.style.backgroundColor = color;
    }
}

function colorOneSquare(event) {
    const square = event.target;
    square.style.backgroundColor = color;
}

function createGrid(gridSize){
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mousedown', setDraw);
            square.addEventListener('mouseover', colorSquare);
            square.addEventListener('mouseup', resetDraw);
            square.addEventListener('click', colorOneSquare);
            row.appendChild(square);
        }
        grid.appendChild(row)
    }
}

function resetGrid(){
    console.log("Clear");
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        console.log(square.style.backgroundColor);
        square.style.backgroundColor = 'black';
    })
}

createGrid(gridSize);

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', resetGrid);