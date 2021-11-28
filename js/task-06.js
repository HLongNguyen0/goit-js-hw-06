const input = document.querySelector('#validation-input');

input.addEventListener('input', () => {
  input.style.outline = 'none';
  if (input.value.length < input.dataset.length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else if (input.value.length == input.dataset.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
});
