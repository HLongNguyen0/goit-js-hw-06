const input = document.querySelector('#validation-input');

input.addEventListener('input', () => {
    input.style.outline = 'none';
    if (input.value.length < 6) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    } else if (input.value.length == input.dataset.length) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid')
    }
})