export default function displayList(todoList) {
  for (let i = 0; i < todoList.length; i += 1) {
    const todoTasks = document.querySelector('.todo-tasks');
    todoTasks.innerHTML += `
      <li class="lists">
       <div class="listContainer">
       <div class="todos">
       <input class="checkbox" type="checkbox"/>
       <p class="description">${todoList[i].description}</p>
       <i id="icon" class="opt bi bi-three-dots-vertical"></i>
       </div>
       </div>
      </li>`;
  }
}