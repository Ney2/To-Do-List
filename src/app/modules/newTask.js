import List from './class.js';

export default function createList() {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  const listText = document.createElement('p');
  listText.className = 'listContent';
  const threeDots = document.createElement('i');
  threeDots.className = 'fas fa-ellipsis-v';
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt icon2';
  list.append(checkboxes, listText, threeDots, trashIcon);

  trashIcon.addEventListener('click', () => {
    form.removeChild(list);
    const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
    const result = getFromLocalStorage.filter((word) => word.description === listText.textContent);
    const empty = [];
    for (let i = 0; i < getFromLocalStorage.length; i += 1) {
      if (result[0].description === getFromLocalStorage[i].description) {
        // eslint-disable-next-line no-continue
        continue;
      }
      empty.push(getFromLocalStorage[i]);
    }
    localStorage.setItem('list', JSON.stringify(empty));
  });

  // eslint-disable-next-line no-unused-vars
  let count = 1;
  checkboxes.addEventListener('click', () => {
    threeDots.classList.toggle('remove-icon-active');
    trashIcon.classList.toggle('icon2');
    listText.classList.toggle('listContent-disable');
    list.classList.toggle('changeBg');
    const getting = JSON.parse(localStorage.getItem('list'));
    const empty = [];
    const hammasi = document.querySelectorAll('.input-div');
    for (let i = 0; i < getting.length; i += 1) {
      if (hammasi[i].classList.contains('changeBg')) {
        getting[i].completed = true;
        count += 1;
      } else {
        getting[i].completed = false;
      }
      empty.push(getting[i]);
      localStorage.setItem('list', JSON.stringify(empty));
    }
  });

  threeDots.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'listContent';
    editInput.style.backgroundColor = '#fffed3';
    list.style.backgroundColor = '#fffed3';
    editInput.value = listText.textContent;
    list.replaceChild(editInput, listText);
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && editInput.value) {
        const getting = JSON.parse(localStorage.getItem('list'));
        const result = getting.filter((word) => word.description === listText.textContent);
        const empty = [];
        for (let i = 0; i < getting.length; i += 1) {
          if (getting[i].index === result[0].index) {
            getting[i].description = editInput.value;
          }
          empty.push(getting[i]);
          localStorage.setItem('list', JSON.stringify(empty));
        }
        list.replaceChild(listText, editInput);
        listText.textContent = editInput.value;
      }
    });
  });
}

const allTasks = [];
const sendToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(allTasks));
};

const textInput = document.getElementById('userInput');
textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    const object = new List(textInput.value, false, allTasks.length);
    allTasks.push(object);
    e.preventDefault();
    createList();
    const listText = document.querySelectorAll('.listContent');
    for (let i = 0; i < allTasks.length; i += 1) {
      listText[i].textContent = allTasks[i].description;
    }
    textInput.value = null;
    sendToLocalStorage();
  }
});