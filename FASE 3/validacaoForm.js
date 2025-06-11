// CPF
const cpfInput = document.getElementById('cpf');
const cpfError = document.getElementById('cpf-error');

cpfInput.addEventListener('blur', () => {
    const cpfValue = cpfInput.value.trim();
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (cpfValue === '') {
        cpfError.style.display = 'none';
        return;
    }

    if (!cpfRegex.test(cpfValue)) {
        cpfError.style.display = 'inline';
        cpfInput.focus();
    } else {
        cpfError.style.display = 'none';
    }
});

// E-mail
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value.trim();

    // Regex simples para validar e-mail básico (ex: email@email.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.style.display = 'none';
        return;
    }

    if (!emailRegex.test(emailValue)) {
        emailError.style.display = 'inline';
        emailInput.focus();
    } else {
        emailError.style.display = 'none';
    }
});