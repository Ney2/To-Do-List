import { displayList } from './app/modules/display.js';
import './main.css';

const todoList = [
  {
    description: 'Complete my todo list assignment',
    compeleted: false,
    index: 1,
  },
  {
    description: 'Ask for a review',
    compeleted: false,
    index: 2,
  },
  {
    description: 'Have some rest',
    compeleted: false,
    index: 3,
  },
  {
    description: 'Work with my coding partner',
    compeleted: false,
    index: 4,
  },
  {
    description: 'Meet my friends',
    compeleted: false,
    index: 5,
  },
  {
    description: 'Attend the stand-up meeting call',
    compeleted: false,
    index: 6,
  },
];
displayList(todoList);