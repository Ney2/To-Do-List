// eslint-disable-next-line import/no-cycle
import createList from './newTask.js';
import List from './class.js';

export default class MyToDo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask(todoList, newTask) {
    this.description = newTask;
    this.completed = false;
    this.index = todoList.length + 1;
    todoList.push({
      description: this.description,
      completed: this.completed,
      index: this.index,
    });

    localStorage.setItem('list', JSON.stringify(todoList));
    createList(this);
  }

  removeToDo(index) {
    const list = new List();
    const listContainer = document.querySelector('.listContainer');
    list.tasks = list.tasks.filter((task) => task.index !== Number(index));
    localStorage.setItem('list', JSON.stringify(list.tasks));
    listContainer.innerHTML = '';
    this.updateIndex();
    this.displayList();
  }

  updateIndex = () => {
    const list = new List();
    list.tasks = list.tasks.map((node, index) => {
      node.index = index + 1;
      return node;
    });
    localStorage.setItem('list', JSON.stringify(list.tasks));
  };

  displayList = () => {
    const listContainer = document.querySelector('.listContainer');
    listContainer.innerHTML = '';
    // eslint-disable-next-line no-unused-vars
    JSON.parse(localStorage.getItem('list')).forEach((task, index) => {
      createList(task);
    });
  };

  checkTasks = (id, done) => {
    const MyToDo = new List();
    const foundIndex = MyToDo.tasks.findIndex(
      (task) => task.index === Number(id),
    );
    MyToDo.tasks[foundIndex] = {
      ...MyToDo.tasks[foundIndex],
      completed: done,
    };
    localStorage.setItem('list', JSON.stringify(MyToDo.tasks));
    if (done === MyToDo.tasks[foundIndex].completed) {
      return true;
    }
    return false;
  }

  editTask = (id, inputValue) => {
    const list = new List();
    const foundIndex = list.tasks.findIndex(
      (task) => task.index === Number(id),
    );
    list.tasks[foundIndex] = {
      ...list.tasks[foundIndex],
      description: inputValue,
    };
    localStorage.setItem('list', JSON.stringify(list.tasks));
  };

  clearTasks = (todoList) => {
    todoList = todoList.filter((task) => task.completed === false);
    return todoList;
  }
}
