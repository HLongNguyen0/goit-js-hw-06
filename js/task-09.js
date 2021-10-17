function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
})