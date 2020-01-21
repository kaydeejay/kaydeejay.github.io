const contactLinks = document.querySelectorAll('.width-wrapper');

contactLinks.forEach((currentEl) => {
    currentEl.addEventListener('click', () => {
        const url = currentEl.getAttribute('data-link');
        const win = window.open(url, '_blank');
        win.focus();
    });
});