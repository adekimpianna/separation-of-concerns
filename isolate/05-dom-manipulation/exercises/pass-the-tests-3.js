'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---

const getTable = divEl.children[0]; // table
const createTbody = document.createElement('tbody');
getTable.appendChild(createTbody);

const getSecondTbody = divEl.children[0].children[1];
const createTr = document.createElement('tr');
const createTr2 = document.createElement('tr');
getSecondTbody.appendChild(createTr);
getSecondTbody.appendChild(createTr2);

const firstTr = divEl.children[0].children[0].children[0];
const secondTr = divEl.children[0].children[0].children[1];
firstTr.innerHTML = 'a';
secondTr.innerHTML = 'b';

const thirdTr = divEl.children[0].children[1].children[0];
const fourthTr = divEl.children[0].children[1].children[1];
thirdTr.innerHTML = 'c';
fourthTr.innerHTML = 'd';
console.log('fourth', fourthTr);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
