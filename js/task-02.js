const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  document.querySelector('#ingredients').append(element);
})
