const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const listItems = document.getElementsByTagName('li');



btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  
  list.insertAdjacentHTML(
    'afterbegin',
    `<li>${input.value}</li>`
  );
  input.value = '';
  
});

btnToggle.addEventListener('click', () => {
  //Select the div to hide
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.style.display = 'block';
  } else {
    btnToggle.textContent = 'Show List';
    listContainer.style.display = 'none';
  }
});

btnRemove.addEventListener('click', () =>  {
  const lastItem = document.querySelector('li:last-child');

  lastItem.remove();
});

for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
}

