const input = document.querySelector('#name-input');
const text = document.querySelector('h1');
const textName = text.firstElementChild;

input.addEventListener('input', () => {
    textName.textContent = input.value;
    if (!textName.textContent) {
        textName.textContent = "Anonymous!"
    }
})
