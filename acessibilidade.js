document.addEventListener('DOMContentLoaded', () => {
    const increaseBtn = document.getElementById('increase-font');
    const decreaseBtn = document.getElementById('decrease-font');
    const toggleGrayscaleBtn = document.getElementById('toggle-grayscale');
    const toggleContrastBtn = document.getElementById('toggle-contrast');
    const textContainer = document.getElementById('text-container');
    const body = document.body;

    

    toggleGrayscaleBtn.addEventListener('click', () => {
        body.classList.remove('high-contrast');
        body.classList.toggle('grayscale');
    });

    toggleContrastBtn.addEventListener('click', () => {
        body.classList.remove('grayscale');
        body.classList.toggle('high-contrast');
    });

    increaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(textContainer).fontSize);
        const newSize = currentSize + 2;
        if (newSize <= 30) {
            textContainer.style.fontSize = `${newSize}px`;
        }
    });

    decreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(textContainer).fontSize);
        const newSize = currentSize - 2;
        if (newSize >= 12) {
            textContainer.style.fontSize = `${newSize}px`;
        }
    });
    
});