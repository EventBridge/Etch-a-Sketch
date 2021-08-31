const container = document.querySelector('.container');

for (let i = 0; i < 16*16; i++) {
    const box = document.createElement('div');
    box.addEventListener('mouseover', () => {
        box.classList.add('boxhover')
    });
    box.classList.add('box');
    container.appendChild(box);
}

function clearBoard() {
    const tiles = document.querySelectorAll('.box');

    tiles.forEach((tile) => {
        tile.remove();
    });
}

const newPrompt = document.querySelector('.newboard');
const newButton = document.querySelector('.newboard button');

newButton.addEventListener('click', () => {
    const size = document.querySelector('.newboard input').value;
    if (size > 100) {
        return;
    }
    newPrompt.style.visibility = 'hidden';
    newBoard(size);
});

function newBoard(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, auto)`
    for (let i = 0; i < size*size; i++) {
        const box = document.createElement('div');
        box.addEventListener('mouseover', () => {
            box.classList.add('boxhover')
        });
        box.classList.add('box');
        container.appendChild(box);
    }
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    clearBoard();
    newPrompt.style.visibility = 'visible';
});