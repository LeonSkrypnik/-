const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;

// Удваиваем массив и перемешиваем его
const shuffledNumbers = [...numbers, ...numbers].sort(() => Math.random() - 0.5);

// Создаем карточки
shuffledNumbers.forEach(number => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.innerText = '?';
    card.addEventListener('click', onCardClick);
    gameBoard.appendChild(card);
});

function onCardClick(event) {
    const clickedCard = event.target;

    if (clickedCard === firstCard || clickedCard.classList.contains('matched')) {
        return;
    }

    clickedCard.innerText = clickedCard.dataset.number;

    if (!firstCard) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.number === secondCard.dataset.number) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
    } else {
        setTimeout(() => {
            firstCard.innerText = '?';
            secondCard.innerText = '?';
        }, 1000);
    }

    firstCard = null;
    secondCard = null;
}
