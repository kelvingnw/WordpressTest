document.addEventListener('DOMContentLoaded', function() {
    const flipButtons = document.querySelectorAll('.flip-button');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardInner = this.closest('.service-card-inner');
            cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
});
