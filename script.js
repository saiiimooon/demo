let current = 0;
const slides = document.querySelectorAll('.slide');
const pageCounter = document.getElementById('page-counter');

// Navigation Logic
function moveSlide(direction) {
    slides[current].classList.remove('active');
    
    current += direction;

    if (current < 0) current = 0;
    if (current >= slides.length) current = slides.length - 1;

    slides[current].classList.add('active');
    
    // Update the counter at the bottom
    pageCounter.textContent = `${current + 1} / ${slides.length}`;
}

// Keyboard Arrow Support
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") moveSlide(1);
    if (e.key === "ArrowLeft") moveSlide(-1);
});

// Reveal Answer Logic (Used for Scramble and Evaluation)
function revealAnswer(targetId, buttonElement) {
    const answerElement = document.getElementById(targetId);
    if (answerElement) {
        answerElement.classList.remove('hidden');
        buttonElement.style.display = 'none'; // Hide the button after clicking
    }
}