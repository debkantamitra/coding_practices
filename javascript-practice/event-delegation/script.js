// Event capturing
const outer = document.querySelector('#outer');
const middle = document.querySelector('#middle');
const inner = document.querySelector('#inner');

outer.addEventListener('click', () => console.log('outer div clicked'), true);
middle.addEventListener('click', () => console.log('middle div clicked'), true);
inner.addEventListener('click', () => console.log('inner div clicked'), true);


// Event bubbling
const outer1 = document.querySelector('#outer1');
const middle1 = document.querySelector('#middle1');
const inner1 = document.querySelector('#inner1');

outer1.addEventListener('click', () => console.log('outer div clicked'));
middle1.addEventListener('click', () => console.log('middle div clicked'));
inner1.addEventListener('click', () => console.log('inner div clicked'));