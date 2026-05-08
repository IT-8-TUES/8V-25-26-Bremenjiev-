document.addEventListener('DOMContentLoaded', () => {
    const displayName = document.getElementById('display-name');
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-phone');
    const profileForm = document.getElementById('profile-form');

    const savedName = localStorage.getItem('profileName');
    const savedEmail = localStorage.getItem('profileEmail');
    const savedPhone = localStorage.getItem('profilePhone');

    if (savedName) {
        displayName.textContent = `Здравей, ${savedName.split(' ')[0]}!`;
        nameInput.value = savedName;
    } else {
        displayName.textContent = "Здравей!";
    }
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPhone) phoneInput.value = savedPhone;

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = nameInput.value.trim();
        const newEmail = emailInput.value.trim();
        const newPhone = phoneInput.value.trim();
        if (newName) {
            localStorage.setItem('profileName', newName);
            localStorage.setItem('profileEmail', newEmail);
            localStorage.setItem('profilePhone', newPhone);
            displayName.textContent = `Здравей, ${newName.split(' ')[0]}!`;
            alert('Промените са запазени успешно!');
        }
    });

    const logoutBtn = document.querySelector('.logout');
    logoutBtn.addEventListener('click', () => {
        if (confirm('Сигурни ли сте, че искате да изчистите данните си и да излезете?')) {
            localStorage.clear();
            window.location.reload();
        }
    });
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
    event.currentTarget.classList.add('active');
}