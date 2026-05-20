document.addEventListener("DOMContentLoaded", function() {
    const cakeOrderForm = document.getElementById("cakeOrderForm");
    const formMessage = document.getElementById("formMessage");

    cakeOrderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const requiredFields = cakeOrderForm.querySelectorAll("[required]");
        let Valid = true;
        requiredFields.forEach(field => {
            if (!field.value) {
                Valid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }
        });
        if (Valid) {
            formMessage.classList.remove("hidden", "error");
            formMessage.classList.add("success");
            formMessage.textContent = "Благодарим! Ще се свържем с Вас за потвърждение до 24 часа.";
            cakeOrderForm.reset();
        } else {
            formMessage.classList.remove("hidden", "success");
            formMessage.classList.add("error");
            formMessage.textContent = "Моля попълнете всички полета!";
        }
    });
});