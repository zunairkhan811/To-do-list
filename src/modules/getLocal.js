import displayTodo from './displayTodo.js';

const getLocal = () => {
  const arr = JSON.parse(localStorage.getItem('Todos'));
  displayTodo(arr);
};

export default getLocal;