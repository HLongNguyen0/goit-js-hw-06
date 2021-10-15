const value = document.querySelector('#value');
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

plus.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

minus.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
