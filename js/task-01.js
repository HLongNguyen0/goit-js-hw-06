const categories = document.querySelector('#categories');
const categoriesArray = categories.children;

console.log('Number of categories: ', categoriesArray.length);
console.log('');

for (let i = 0; i < categoriesArray.length; i += 1) {
  const categoryTitle = categoriesArray[i].firstElementChild;
  const categoryList = categoryTitle.nextElementSibling.children;
  console.log('Category: ', categoryTitle.textContent);
  console.log('Elements: ', categoryList.length);
  console.log('');
}
