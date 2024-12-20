
// Botón "More" para expandir tarjetas
document.querySelectorAll('.more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('expanded');
    });
});

// Efecto de rotación dinámica en el carrusel
document.querySelectorAll('.card-slider').forEach(slider => {
    slider.addEventListener('scroll', () => {
        const cards = slider.querySelectorAll('.card');
        const scrollPosition = slider.scrollLeft;

        cards.forEach((card, index) => {
            const offset = card.offsetLeft - scrollPosition - slider.offsetWidth / 2 + card.offsetWidth / 2;
            const rotateY = offset / 10; // Ajustar el valor para más rotación
            card.style.transform = `rotateY(${rotateY}deg)`;
        });
    });
});
