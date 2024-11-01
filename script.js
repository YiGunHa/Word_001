const words = ['사랑하다', '먹다', '마시다', '간다라고하다'];
let board = Array(100).fill(''); // 10x10 빈 보드

// 글자를 보드에 무작위로 채우기
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
    if (letter === '') {
        square.classList.add('empty');
    } else {
        square.textContent = letter;
    }
    square.addEventListener('click', () => handleSquareClick(letter, i, square));
    gameBoard.appendChild(square);
});

function handleSquareClick(letter, index, square) {
    if (letter === words[0][0]) { // 첫 번째 글자만 맞는지 확인
        board[index] = ''; // 보드에서 글자 제거
        square.classList.add('empty');
        square.textContent = '';
        document.getElementById('selected-word').textContent += letter;
    }
}
