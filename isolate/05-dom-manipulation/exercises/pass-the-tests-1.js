'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1><h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end

const getP = divEl.children[0];
const addNav = document.createElement('nav');
divEl.replaceChild(addNav, getP);

const getSection = divEl.children[1];
const addH2 = document.createElement('h2');
divEl.insertBefore(addH2, getSection);

const getNewSection = divEl.children[2];
console.log(getNewSection); // section 

const getH1 = divEl.children[3];
console.log(getH1); // H1
const addP = document.createElement('p');
divEl.replaceChild(addP, getH1);


// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
