const value = document.querySelector('#value');
const plus = value.nextElementSibling;
const minus = value.previousElementSibling;
let counterValue = 0;

plus.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

minus.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
