// let container = document.querySelector('.container');
// container.classList.add('active');
// console.log(container)

let child = document.querySelector('.child');
let parent = child.closest('.parent');
console.log(parent);
let parents = document.querySelectorAll('.parent');
console.log(parents);
let quantity = parents.length;
console.log(quantity)