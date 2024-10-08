// Accordion toggle
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
    header.parentElement.classList.toggle('open');
});
});