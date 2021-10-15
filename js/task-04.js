const counterValue = document.querySelector('#value');
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');
let value = 0;

plus.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

minus.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});
