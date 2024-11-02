const words = [
    "입학을 하다", "졸업을 하다", "일자리를 구하다", 
    "일자리를 찾다", "일을 맡다", "업무를 맡다", 
    "운전면허를 따다", "장학금을 받다", "회사에 지원하다", 
    "승진하다", "청혼을 하다", "청혼을 받다", 
    "휴학하다", "회사에서 근무하다", "일을 그만두다", 
    "아이를 낳다"
];
const englishTranslations = [
"сургуульд орох","төгсөх","ажлын байр хайх",
"ажлын байр олох","ажил хариуцан авах","ажил хариуцан авах",
"жолооны үнэмлэх авах","компанид хүсэлт гаргах","компанид өргөдөл гаргах",
"албан тушаал дэвших","гэрлэх санал тавих","гэрлэх санал хүлээн авах",
"чөлөө авах","компанид ажиллах","ажлаасаа гарах",
"хүүхэд төрүүлэх"
];

let currentWordIndex = 0;
let currentWord = words[currentWordIndex].split('');
let clickedLetters = [];
let previousClickedCells = [];

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    let allLetters = words.slice(currentWordIndex, currentWordIndex + 3).join('').split('');
    allLetters = allLetters.sort(() => Math.random() - 0.5).slice(0, 21); // 21개 글자 제한

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

function handleCellClick(cell) {
    if (clickedLetters.length < currentWord.length && cell.textContent) {
        clickedLetters.push(cell.textContent);
        previousClickedCells.push(cell);
        cell.textContent = '';
        cell.classList.add('empty');
        updateBottomRow();

        // "되돌리기" 버튼 활성화
        const undoButton = document.getElementById('undoButton');
        if (clickedLetters.length > 0) {
            undoButton.classList.remove('disabled');
            undoButton.disabled = false;
        }

        if (clickedLetters.length === currentWord.length) {
            checkCompletion();
        }
    }
}

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

function checkCompletion() {
    const alertBox = document.getElementById('alert');
    if (clickedLetters.join('') === currentWord.join('')) {
        alertBox.classList.add('hidden');
        if (currentWordIndex < words.length - 1) {
            currentWordIndex++;
            currentWord = words[currentWordIndex].split('');
            clickedLetters = [];
            previousClickedCells = [];
            let d = currentWord.length; // 맞추어야 할 글자 수
            document.getElementById('header').textContent = `단어 ${currentWordIndex + 1} / ${words.length} : ${englishTranslations[currentWordIndex]} (${d})`;
            createGrid();
            updateBottomRow();

            // "되돌리기" 버튼 비활성화
            const undoButton = document.getElementById('undoButton');
            undoButton.classList.add('disabled');
            undoButton.disabled = true;
        } else {
            document.getElementById('grid').classList.add('hidden');
            document.getElementById('bottomRow').classList.add('hidden');
            document.getElementById('header').classList.add('hidden');
            document.getElementById('end-message').classList.remove('hidden');
        }
    } else {
        alertBox.classList.remove('hidden');
        clickedLetters = [];
        previousClickedCells = [];
        updateBottomRow();
        createGrid();
    }
}

document.getElementById('undoButton').addEventListener('click', () => {
    if (clickedLetters.length > 0) {
        const lastLetter = clickedLetters.pop();
        const lastCell = previousClickedCells.pop();
        if (lastCell) {
            lastCell.textContent = lastLetter;
            lastCell.classList.remove('empty');
        }
        updateBottomRow();

        // "되돌리기" 버튼 비활성화 조건 확인
        if (clickedLetters.length === 0) {
            const undoButton = document.getElementById('undoButton');
            undoButton.classList.add('disabled');
            undoButton.disabled = true;
        }
    }
});

// 초기 설정
let d = currentWord.length; // 첫 번째 단어의 글자 수로 초기화
document.getElementById('header').textContent = `단어 1 / ${words.length} : ${englishTranslations[0]} (${d})`;
createGrid();
