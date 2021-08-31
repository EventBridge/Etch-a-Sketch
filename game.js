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
    const tiles = document.querySelectorAll('.boxhover');

    tiles.forEach((tile) => {
        tile.classList.remove('boxhover');
    });
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    clearBoard();
});