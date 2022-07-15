import './main.css';
import createList from './app/modules/newTask.js';

window.addEventListener('load', () => {
  let allTasks = [];
  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getFromLocalStorage.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getFromLocalStorage[i].description;
    if (getFromLocalStorage[i].completed === true) {
      getFromLocalStorage[i].completed = false;
    }
    localStorage.setItem('list', JSON.stringify(getFromLocalStorage));

    // eslint-disable-next-line no-unused-vars
    allTasks = getFromLocalStorage;
  }
});
