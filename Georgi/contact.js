const contactForm = document.getElementById('contactForm');
const messageEl = document.getElementById('message');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (messageEl) {
            messageEl.textContent = 'Вашето съобщение беше изпратено успешно! Ще се свържем скоро.';
            messageEl.style.color = '#3a2418';
        }
        contactForm.reset();
    });
}
