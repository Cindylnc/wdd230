const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const newEntry = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const dltBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newEntry;
    listItem.appendChild(dltBtn);
    dltBtn.textContent = '❌';
    list.appendChild(listItem);

    dltBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();

  
  });