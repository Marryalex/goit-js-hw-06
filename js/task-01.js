const categoryEl = document.querySelectorAll(`.item`);
const numberCategoryEl = categoryEl.length;
console.log(`Number of categories:${numberCategoryEl}`);

[...categoryEl].forEach(function (el) {
    const numberOfElements = el.lastElementChild;
    const nameOfElements = el.firstElementChild;
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.children.length}`)
})