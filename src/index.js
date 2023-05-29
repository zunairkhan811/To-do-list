import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import setLocal from './modules/setLocal.js';
import getLocal from './modules/getLocal.js';

const input = document.querySelector('#add-task-div input');
const entericon = document.querySelector('.add-task-icon i');
const refreshicon = document.querySelector('.list-heading-icon i');

getLocal();

refreshicon.addEventListener('click', () => {
  refreshicon.style.transform = 'rotate(550deg)';
  window.location.reload();
});

entericon.addEventListener('click', () => {
  if (input.value === '') {
    throw new Error('Input value is empty');
  } else {
    const arr = localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [];
    arr.push({ id: uuidv4(), completed: false, title: input.value });
    setLocal(arr);
    getLocal();
    input.value = '';
  }
});
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    entericon.click();
  }
});
