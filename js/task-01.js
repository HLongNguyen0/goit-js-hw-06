const categories = document.querySelector('#categories');
const categoriesArray = categories.children;

console.log('Number of categories: ', categoriesArray.length);
console.log('');

[...categoriesArray].forEach(category => {
  const categoryTitle = category.firstElementChild;
  const categoryList = categoryTitle.nextElementSibling.children;
  console.log('Category: ', categoryTitle.textContent);
  console.log('Elements: ', categoryList.length);
  console.log('');
});

