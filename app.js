const btnUpdate = document.querySelector('.btn-main');
const headline = document.getElementById('headline');
const items = document.querySelectorAll('li');
const highlights = document.querySelectorAll('.highlight');


btnUpdate.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';													 
});
