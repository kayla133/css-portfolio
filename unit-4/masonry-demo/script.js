const grid = document.querySelector('.masonry-grid');

const masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 16
});
const addBtn = document.querySelector('#add-item');
let count = 12;

addBtn.addEventListener('click', () => {
  count++;

  const item = document.createElement('div');
  item.className = 'card grid-item ' + ['s', 'm', 't'][Math.floor(Math.random() * 3)];
  item.textContent = count;
  item.tabIndex = 0;

  grid.appendChild(item);
  masonry.appended(item);
});

