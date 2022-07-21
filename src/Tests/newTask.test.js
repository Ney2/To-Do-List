import List from '../app/modules/class.js';

let list = new List('description', false, 1);
const todoArray = [];

describe('add a todo list', () => {
  test('add a single task to the list', () => {
    document.body.innerHTML = `
    <div>
    <input name="input" class="input">
    </div>
    `;
    todoArray.push(list);
    expect(todoArray).toHaveLength(1);
  });

  test('add task to the list', () => {
    list = ('complete my assignment', false, 2);
    todoArray.push(list);
    expect(todoArray).toHaveLength(2);
  });

  test('add task to the list', () => {
    list = ('submit my assignment', false, 3);
    todoArray.push(list);
    expect(todoArray).toHaveLength(3);
  });
});

describe('remove a todo list', () => {
  test('remove a single task from the list', () => {
    todoArray.pop();
    expect(todoArray).toHaveLength(2);
  });
});

describe('edit todo list', () => {
  test('edit a task from the list', () => {
    const input = 'new list';
    list = new List(input, false, 3);
    todoArray.push(list);
    expect(list.description).toBe(input);
  });
});

describe('complete a todo list', () => {
  test('complete a task from the list', () => {
    const input = 'new list';
    list = new List(input, true, 4);
    todoArray.push(list);
    expect(list.completed).toBeTruthy();
  });
});

describe('clear all', () => {
  test('clear all completed tasks from the list', () => {
    todoArray.pop();
    expect(todoArray).toHaveLength(3);
  });
});
