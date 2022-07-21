/**
 * @jest-environment jsdom
 */

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
