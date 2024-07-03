let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function showCard(index) {
    const cardsContainer = document.querySelector('.cards');
    const offset = -index * 320; // 300px width + 20px margin
    cardsContainer.style.transform = `translateX(${offset}px)`;
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function showPreviousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

// Initialize the first card display
showCard(currentIndex);