const words = ['사랑하다', '먹다', '마시다', '간다라고하다'];
let board = Array.from({ length: 100 }, () => ''); // 10x10 board

// Fill the board with random letters from words
words.forEach(word => {
    for (let letter of word) {
        let placed = false;
        while (!placed) {
            const index = Math.floor(Math.random() * 100);
            if (!board[index]) {
                board[index] = letter;
                placed = true;
            }
        }
    }
});

const gameBoard = document.getElementById('game-board');
board.forEach((letter, i) => {
    const square = document.createElement('div');
    square.classList.add('square');
    if (letter === '') square.classList.add('empty');
    square.textContent = letter;
    square.addEventListener('click', () => handleSquareClick(letter, i));
    gameBoard.appendChild(square);
});

function handleSquareClick(letter, index) {
    if (letter === words[0][0]) { // Check if clicked letter is the first letter of the first word
        board[index] = '';
        document.querySelectorAll('.square')[index].classList.add('empty');
        document.querySelectorAll('.square')[index].textContent = '';
        document.getElementById('selected-word').textContent += letter;
    }
}
