// eslint-disable-next-line import/no-cycle
import MyToDo from './display.js';

export default function createList(todoLists) {
  const listContainer = document.querySelector('.listContainer');
  const addInput = document.querySelector('#add');
  addInput.value = '';
  const oneTask = document.createElement('li');
  listContainer.appendChild(oneTask);
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskdiv');
  taskDiv.setAttribute('id', todoLists.index);
  oneTask.appendChild(taskDiv);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', todoLists.index);
  checkbox.classList.add('checkboxitem');
  checkbox.checked = `${todoLists.completed ? 'checked' : ''}`;
  taskDiv.appendChild(checkbox);
  const inputText = document.createElement('input');
  inputText.className = 'inputtext';
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', todoLists.index);
  inputText.setAttribute('value', todoLists.description);
  inputText.setAttribute('disabled', '');
  taskDiv.appendChild(inputText);
  const ellipsis = document.createElement('button');
  ellipsis.setAttribute('type', 'button');
  ellipsis.classList.add('editButton');
  ellipsis.classList.add(todoLists.index);
  ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical fa-icon fa-lg"></i>';
  oneTask.appendChild(ellipsis);
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.classList.add(todoLists.index);
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('id', todoLists.index);
  deleteButton.innerHTML = `<i id="${todoLists.index}" class="fas fa-trash-alt fa-icon fa-lg"></i>`;
  deleteButton.style.display = 'none';
  oneTask.appendChild(deleteButton);
  // eslint-disable-next-line no-unused-vars
  ellipsis.addEventListener('click', (e) => {
    const siblingDeleteBtn = document.getElementsByClassName(
      `deleteButton ${todoLists.index}`,
    )[0];
    inputText.disabled = false;
    inputText.focus();
    ellipsis.style.display = 'none';
    siblingDeleteBtn.style.display = 'block';
  });
  deleteButton.addEventListener('click', (e) => {
    const DeleteItem = new MyToDo();
    DeleteItem.removeFromToDo(e.target.id);
  });
  checkbox.addEventListener('change', (e) => {
    const checkedTasks = new MyToDo();
    checkedTasks.checkTasks(e.target.id, e.target.checked);
  });
  inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputText.placeholder = inputText.value;
      ellipsis.style.display = 'block';
      deleteButton.style.display = 'none';
      inputText.removeAttribute('disabled');
      const ListTask = new MyToDo();
      ListTask.editItem(inputText.id, inputText.value);
      inputText.setAttribute('disabled', '');
    }
  });
}
