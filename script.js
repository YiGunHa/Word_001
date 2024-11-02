// 초기 데이터 설정
const words = ["단어", "사과", "하늘", "바다", "기차", "강아지", "음악", "책상", "학교", "사랑"];
const englishTranslations = ["Word", "Apple", "Sky", "Sea", "Train", "Puppy", "Music", "Desk", "School", "Love"];
let currentWordIndex = 0;
let currentWord = words[currentWordIndex].split('');
let clickedLetters = [];

// 7x7 정사각형을 랜덤하게 채우기
function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    let allLetters = words.join('').split('');
    allLetters = allLetters.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 49; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (allLetters[i]) {
            cell.textContent = allLetters[i];
            cell.addEventListener('click', () => handleCellClick(cell));
        } else {
            cell.textContent = '';
            cell.classList.add('empty');
        }
        grid.appendChild(cell);
    }
}

// 클릭한 글자를 하단 7x1 공간으로 이동
function handleCellClick(cell) {
    if (clickedLetters.length < currentWord.length && cell.textContent) {
        clickedLetters.push(cell.textContent);
        cell.textContent = '';
        cell.classList.add('empty');
        updateBottomRow();

        if (clickedLetters.length === currentWord.length) {
            checkCompletion();
        }
    }
}

// 하단 7x1 공간 업데이트
function updateBottomRow() {
    const bottomRow = document.getElementById('bottomRow');
    bottomRow.innerHTML = '';
    clickedLetters.forEach(letter => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = letter;
        bottomRow.appendChild(cell);
    });
}

// 단어 맞추기 확인
function checkCompletion() {
    const alertBox = document.getElementById('alert');
    if (clickedLetters.join('') === currentWord.join('')) {
        alertBox.classList.add('hidden');
        if (currentWordIndex < words.length - 1) {
            currentWordIndex++;
            currentWord = words[currentWordIndex].split('');
            clickedLetters = [];
            document.getElementById('header').textContent = `맞출 단어 ${currentWordIndex + 1} / ${words.length} : ${englishTranslations[currentWordIndex]}`;
            createGrid();
            updateBottomRow();
        } else {
            document.getElementById('grid').classList.add('hidden');
            document.getElementById('bottomRow').classList.add('hidden');
            document.getElementById('header').classList.add('hidden');
            document.getElementById('end-message').classList.remove('hidden');
        }
    } else {
        alertBox.classList.remove('hidden');
        clickedLetters = [];
        updateBottomRow();
        createGrid();
    }
}

// 초기 화면 설정
document.getElementById('header').textContent = `맞출 단어 1 / ${words.length} : ${englishTranslations[0]}`;
createGrid();
