// Event capturing
const outer = document.querySelector('#outer');
const middle = document.querySelector('#middle');
const inner = document.querySelector('#inner');

outer.addEventListener('click', () => console.log('outer div clicked', this), true);
middle.addEventListener('click', () => console.log('middle div clicked',  this), true);
inner.addEventListener('click', () => console.log('inner div clicked', this), true);


// Event bubbling
const outer1 = document.querySelector('#outer1');
const middle1 = document.querySelector('#middle1');
const inner1 = document.querySelector('#inner1');

outer1.addEventListener('click', function(e) {console.log('outer div clicked', this.id)});
middle1.addEventListener('click', function(e){console.log('middle div clicked', this.id)});
inner1.addEventListener('click', function(e){console.log('inner div clicked', this.id)});