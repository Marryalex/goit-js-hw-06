const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')
const creatyLiFromArray = (array) =>
  array.map((el) => `<li class = "item">${el}</li>`).join("");
  const list = creatyLiFromArray(ingredients)
ul.insertAdjacentHTML("beforeend", list)