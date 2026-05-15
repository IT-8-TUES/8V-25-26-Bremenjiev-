document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.order-button');
    buttons.forEach(button => {
        button.addEventListener('focus', () => {
            button.style.boxShadow = '0 0 0 4px rgba(201, 133, 107, 0.2)';
        });
        button.addEventListener('blur', () => {
            button.style.boxShadow = '';
        });
    });
});