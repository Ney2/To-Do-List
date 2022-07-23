/**
 * @jest-environment jsdom
 */

import MyToDo from '../app/modules/display.js';
import List from '../app/modules/class.js';

const newTask = new MyToDo('description', false, 1);
const todoList = [];

describe('add a todo list', () => {
  test('add a single task to the list', () => {
    document.body.innerHTML = `
            <label for="add" class="add"></label>
            <input name="add" id="add" placeholder="Add to your list.." />
            <ul class="listContainer"></ul>`;
    newTask.addTask(todoList, 'complete assignment');
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(1);
  });

  test('add two tasks to the list', () => {
    newTask.addTask(todoList, 'Meet friends');
    newTask.addTask(todoList, 'Update my Resume');
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(3);
  });
});

describe('remove a todo list', () => {
  test('remove a single task from the list', () => {
    newTask.removeToDo(1);
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(2);
  });
});

describe('edit todo list', () => {
  test('edit a task from the list', () => {
    newTask.addTask(todoList, 'Meet friends');
    newTask.editTask(3, 'Watch movies');
    const ToDo = new List();
    const value = ToDo.tasks[2].description;
    expect(value).toBe('Watch movies');
  });

  test('complete a task from the list', () => {
    document.body.innerHTML = `
    <section>
    <div class="wrapper">
        <p class="header">Today's To Do <i class="fas fa-sync"></i></p>
        <form class="form">
          <input id="userInput" type="text" placeholder="Add to your list...">
        </form>
        <ul class="listContainer"></ul>
       <a class="clear" href="#">Clear all completed</a>
      </div>
    </section>`;
    const MyTodo = new List();
    expect(newTask.checkTasks(MyTodo.tasks[0], true)).toBe(true);
  });
});

describe('clear all', () => {
  test('clear all completed tasks from the list', () => {
    const clearToDo = new MyToDo();
    const todoList = [{ description: 'Watch movie', completed: false, index: 1 },
      { description: 'Wash clothe', completed: false, index: 2 },
      { description: 'Submit my project', completed: false, index: 3 }];
    expect(clearToDo.clearTasks(todoList)).toHaveLength(3);
  });
});
