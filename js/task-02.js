const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')
// const creatyLiFromArray = (array) =>
//   array.map((el) => `<li class = "item">${el}</li>`).join("");
//   const list = creatyLiFromArray(ingredients)
// ul.insertAdjacentHTML("beforeend", list)



const creatyLiFromArray = ingredients.map((ingredient) => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = ingredient
  return list
}
)
ul.append(...creatyLiFromArray)
