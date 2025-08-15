document.querySelectorAll('.tournament-card').forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById(card.dataset.modal).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        document.getElementById(closeBtn.dataset.close).style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
