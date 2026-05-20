document.addEventListener('DOMContentLoaded', () => {
    const resForm = document.getElementById('reservationForm');
    const msgDiv = document.getElementById('formMessage');

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('res-date').setAttribute('min', today);

    resForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('.submit-res-btn');
        btn.textContent = 'Обработка...';
        btn.disabled = true;
        setTimeout(() => {
            const name = document.getElementById('res-name').value;
            msgDiv.textContent = `Благодарим Ви, ${name}! Вашата резервация е приета. Ще получите потвърждение по телефона.`;
            msgDiv.className = 'form-message success';
            resForm.reset();
            btn.textContent = 'Резервирай сега';
            btn.disabled = false;
        }, 1500);
    });
});